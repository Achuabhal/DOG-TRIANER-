import React, { useEffect, useState } from 'react';
import { auth, db } from '../../../helper/firebaseConfig'; // Import your Firebase auth and Firestore instances
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';

interface Photo {
  url: string;
  description: string;
}

interface MediaItem {
  id: string;
  title: string;
  description: string;
  photoUrls: Photo[];  // Array of photo objects with url and description
  videoUrl: string | null;
}


const Blog: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);

  // Handle user authentication and fetch data if authenticated
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Fetch media items if authenticated
        const mediaData = await fetchMediaItems();
        setMediaItems(mediaData);
      }
    });

    return () => unsubscribe(); // Cleanup on component unmount
  }, []);

  // Google sign-in handler
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google sign-in error: ", error);
    }
  };

  // Function to fetch media items from Firebase
  const fetchMediaItems = async (): Promise<MediaItem[]> => {
    const mediaCollection = collection(db, 'media');
    const mediaSnapshot = await getDocs(mediaCollection);
    const mediaList = mediaSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as MediaItem[];
    return mediaList;
  };
  

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome to the Media Gallery</h1>
          {mediaItems.map((item) => (
            <div key={item.id} style={{ marginBottom: '20px' }}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              
              {/* Render photos */}
              <div className="mt-3">
  {item.photoUrls.map((photo: Photo) => (
    <div key={photo.url} className="mb-2">
      <iframe
        src={photo.url}
        title="Photo"
        width="100%"
        height="400px"
        frameBorder="0"
        style={{ pointerEvents: "none" }}
      ></iframe>
      <p>{photo.description}</p>
    </div>
  ))}
</div>

              {/* Render video if it exists */}
              {item.videoUrl && (
                <iframe
                  src={item.videoUrl}
                  width="560"
                  height="315"
                  
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                  title={item.title}
                ></iframe>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>You are not authenticated. Please sign in with Google to view the media.</p>
          <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        </div>
      )}
    </div>
  );
};

export default Blog;

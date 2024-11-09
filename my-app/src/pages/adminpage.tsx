import React, { useState, useEffect } from "react";
import { db } from "../helper/firebaseConfig";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { auth } from "../helper/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

interface Photo {
  url: string;
  description: string;
}

const AdminPage: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [videoTitle, setVideoTitle] = useState<string>("");
  const [videoLink, setVideoLink] = useState<string>("");
  const [photoLinks, setPhotoLinks] = useState<Photo[]>([{ url: "", description: "" }]);
  const [description, setDescription] = useState<string>("");
  const [mediaList, setMediaList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [editingMedia, setEditingMedia] = useState<any | null>(null); // state to track which media is being edited

  useEffect(() => {
    document.title = user ? "Admin Dashboard - Media Management" : "Login - Admin Panel";

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchMedia();
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [user]);

  const fetchMedia = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "media"));
      const media: any[] = [];
      querySnapshot.forEach((doc) => {
        media.push({ id: doc.id, ...doc.data() });
      });
      setMediaList(media);
    } catch (error) {
      console.error("Error fetching media:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (videoLink && photoLinks.length > 0 && description && videoTitle) {
      const embeddedVideoLink = convertToEmbeddedLink(videoLink);
      const embeddedPhotoLinks = photoLinks.map((photo) => ({
        url: convertToEmbeddedLink(photo.url),
        description: photo.description,
      }));

      try {
        if (editingMedia) {
          // If we're editing, update the existing media
          const mediaRef = doc(db, "media", editingMedia.id);
          await updateDoc(mediaRef, {
            title: videoTitle,
            videoUrl: embeddedVideoLink,
            photoUrls: embeddedPhotoLinks,
            description,
          });
        } else {
          // If it's a new media item, add it
          await addDoc(collection(db, "media"), {
            title: videoTitle,
            videoUrl: embeddedVideoLink,
            photoUrls: embeddedPhotoLinks,
            description,
          });
        }
        fetchMedia();
        resetForm();
      } catch (error) {
        console.error("Error submitting media: ", error);
      }
    }
  };

  const convertToEmbeddedLink = (url: string) => {
    // Check if it's a Google Drive URL and convert it to embedded format
    if (url.includes("drive.google.com")) {
      const fileId = url.split("/d/")[1]?.split("/")[0];
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    return url; // Return the original URL if it's not a Google Drive link
  };

  const resetForm = () => {
    setVideoTitle("");
    setVideoLink("");
    setPhotoLinks([{ url: "", description: "" }]);
    setDescription("");
    setEditingMedia(null);
  };

  const handleAddPhotoLink = () => {
    setPhotoLinks([...photoLinks, { url: "", description: "" }]);
  };

  const handleRemovePhotoLink = (index: number) => {
    setPhotoLinks(photoLinks.filter((_, i) => i !== index));
  };

  const handlePhotoLinkChange = (index: number, value: string) => {
    const updatedLinks = [...photoLinks];
    updatedLinks[index].url = value;
    setPhotoLinks(updatedLinks);
  };

  const handleDescriptionChange = (index: number, value: string) => {
    const updatedLinks = [...photoLinks];
    updatedLinks[index].description = value;
    setPhotoLinks(updatedLinks);
  };

  const handleLogout = () => {
    auth.signOut();
  };

  const handleDeleteMedia = async (id: string) => {
    try {
      const mediaRef = doc(db, "media", id);
      await deleteDoc(mediaRef);
      fetchMedia();
    } catch (error) {
      console.error("Error deleting media:", error);
    }
  };

  const handleEditMedia = (media: any) => {
    setEditingMedia(media);
    setVideoTitle(media.title);
    setVideoLink(media.videoUrl);
    setDescription(media.description);
    setPhotoLinks(media.photoUrls);
  };

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  if (!user) return (
    <div className="container mt-5">
      <div className="alert alert-warning">Login to access admin dashboard.</div>
    </div>
  );

  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col">
          <h2 className="mb-3">Admin Dashboard</h2>
          <p className="text-muted">Welcome, {user.email}</p>
          <button className="btn btn-danger mb-4" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter video title"
                value={videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Google Drive video link"
                value={videoLink}
                onChange={(e) => setVideoLink(e.target.value)}
              />
            </div>

            {photoLinks.map((photo, index) => (
              <div key={index} className="row mb-3">
                <div className="col-md-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={`Enter Google Drive photo link ${index + 1}`}
                    value={photo.url}
                    onChange={(e) => handlePhotoLinkChange(index, e.target.value)}
                  />
                </div>
                <div className="col-md-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={`Description for photo ${index + 1}`}
                    value={photo.description}
                    onChange={(e) => handleDescriptionChange(index, e.target.value)}
                  />
                </div>
                <div className="col-md-2">
                  {index > 0 && (
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => handleRemovePhotoLink(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}

            <div className="mb-3">
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={handleAddPhotoLink}
              >
                Add Another Photo Link
              </button>
            </div>

            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Enter description about the video"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              {editingMedia ? "Update Media" : "Submit Media"}
            </button>
          </form>
        </div>
      </div>

      <h3 className="mb-4">Media Items:</h3>
      <div className="row">
        {mediaList.length === 0 ? (
          <div className="col">
            <p className="alert alert-info">No media available.</p>
          </div>
        ) : (
          mediaList.map((media) => (
            <div key={media.id} className="col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5>{media.title}</h5>
                    <div>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => handleEditMedia(media)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteMedia(media.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div>
                    <iframe
                      src={media.videoUrl}
                      title="Video"
                      width="100%"
                      height="400px"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                    ></iframe>
                  </div>

                  <div className="mt-3">
  {media.photoUrls.map((photo: Photo) => (
    <div key={photo.url} className="mb-2">
      <iframe
        src={photo.url}
        title="Photo"
        width="600px"
        height="600px"
        frameBorder="0"
        style={{ pointerEvents: "none" }}
      ></iframe>
      <p>{photo.description}</p>
    </div>
  ))}
</div>


                  <div className="mt-3">
                    <p>{media.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminPage;

import React, { useContext, useState } from 'react'
import List from '../../Components/list/List'
import './ProfilePage.scss'
import Chat from '../../Components/chat/Chat'
import apiRequest from '../../lib/apiRequest'
import { useNavigate, Link } from 'react-router-dom'
import HomePage from '../homePage/HomePage'
import { AuthContext } from '../../context/AuthContext.jsx';
import CloudinaryUploadWidget from '../../Components/UploadWidget/CloudinaryUploadWidget.jsx'

function ProfilePage() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [avatar, setavatar] = useState(currentUser?.avatar || "");
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [updating, setUpdating] = useState(false);
  const [updateError, setUpdateError] = useState("");
  console.log('ProfilePage currentUser:', currentUser);

  const handleLogout = async () => {
    try {
      await apiRequest.post('/auth/logout');
      updateUser(null);
      localStorage.removeItem('user');
      navigate('/');
    } catch (erro) {
      console.log(erro);
    }
  };

  const openModal = () => {
    setNewUsername(currentUser?.username || currentUser?.user?.username || currentUser?.name || "");
    setShowModal(true);
    setUpdateError("");
  };

  const closeModal = () => {
    setShowModal(false);
    setUpdateError("");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdating(true);
    setUpdateError("");
    try {
      const res = await apiRequest.put('/user/update', { username: newUsername });
      updateUser({ ...currentUser, username: res.data.user.username });
      closeModal();
    } catch (err) {
      setUpdateError(err.response?.data?.message || "Failed to update username");
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className='profilePage'>
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h3>User Information</h3>
            <button onClick={openModal}>Update Profile</button>
          </div>
          <div className='info'>
            <span>Profile Picture:
              <img src={avatar || "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"} alt="User image" srcSet="" />
              <CloudinaryUploadWidget
                uwConfig={{
                  cloudName: "dhz8jovon",
                  uploadPreset: "estate",
                  multiple: false,
                  maxImageFileSize: 20000000,
                  folder: "Avatars",
                }}
                setavatar={async (url) => {
                  setavatar(url);
                  try {
                    const res = await apiRequest.put('/user/update', { avatar: url });
                    updateUser({ ...currentUser, avatar: res.data.user.avatar });
                  } catch (err) {
                    // Optionally show error
                  }
                }}
              />
            </span>
            <span>User Name: <b>{currentUser?.username || currentUser?.user?.username || currentUser?.name || 'Anonymous'}</b></span>
            <span>User Email: <b>{currentUser?.email || currentUser?.user?.email || 'Not provided'}</b></span>
          </div>
          <button className='Logout' onClick={handleLogout}>Logout</button>
          <div className="title">
            <h3>My list</h3>
            <Link to="/add"><button>Create new post</button></Link>

          </div>
          <List />
          <div className="title">
            <h3>Saved List</h3>
            <button>Update Profile</button>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <Chat />
      </div>

      {/* Modal for updating username */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Update Username</h2>
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                value={newUsername}
                onChange={e => setNewUsername(e.target.value)}
                disabled={updating}
                placeholder="Enter new username"
              />
              {updateError && <div className="error">{updateError}</div>}
              <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <button type="submit" disabled={updating}>Rename</button>
                <button type="button" onClick={closeModal} disabled={updating}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;

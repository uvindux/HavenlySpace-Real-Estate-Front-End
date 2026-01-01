import React, { useContext } from 'react'
import List from '../../Components/list/List'
import './ProfilePage.scss'
import Chat from '../../Components/chat/Chat'
import apiRequest from '../../lib/apiRequest'
import { useNavigate } from 'react-router-dom'
import HomePage from '../homePage/HomePage'
import { AuthContext } from '../../context/AuthContext.jsx';

function ProfilePage() {
  const navigate = useNavigate();
  const { currentUser, updateUser } = useContext(AuthContext);
  console.log('ProfilePage currentUser:', currentUser);

  const handleLogout = async () => {
    try {
      await apiRequest.post('/auth/logout');
      updateUser(null);
      localStorage.removeItem('user');
      navigate('/');
    }
    catch (erro) {
      console.log(erro);
    }
  }
  return (
    <div className='profilePage'>
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h3>User Information</h3>
            <button>Update Profile</button>
          </div>
          <div className='info'>
            <span>Profile Picture:
              <img src={currentUser?.profilePic || "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"} alt="User image" srcSet="" />
            </span>
            <span>User Name: <b>{currentUser?.username || currentUser?.user?.username || currentUser?.name || 'Anonymous'}</b></span>
            <span>User Email: <b>{currentUser?.email || currentUser?.user?.email || 'Not provided'}</b></span>
           
          </div>
          <button className='Logout' onClick={handleLogout}>Logout</button>
          <div className="title">
            <h3>My list</h3>
            <button>Create new post</button>
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


    </div>
  )
}

export default ProfilePage

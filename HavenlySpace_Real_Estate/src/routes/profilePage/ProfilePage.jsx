import React from 'react'
import List from '../../Components/list/List'
import './ProfilePage.scss'
import Chat from '../../Components/chat/Chat'

function ProfilePage() {
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

              <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" alt="User image" srcset="" />
            </span>
            <span>User Name: <b>John Doe</b></span>
            <span>User Email: <b>uvindumanohara@gmail.com</b></span>
          
          </div>
          <div className="title">
            <h3>My list</h3>
            <button>Create new post</button>
          </div>
          <List/>
          <div className="title">
            <h3>Saved List</h3>
            <button>Update Profile</button>
          </div>
          <List/>
        </div>
      </div>
      <div className="chatContainer">

        <Chat/>

      </div>
                    
      
    </div>
  )
}

export default ProfilePage

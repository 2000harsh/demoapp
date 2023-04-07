import React from 'react';
function ProfilePage({user})
{
    return(
        <div className="profile">
      <img src="./img/profilePicture.png" alt="Profile Picture" />
      <h2>{user.name}</h2>
        <li><strong>Email:</strong> {user.email}</li>
        <li><strong>Location:</strong> {user.location}</li>
    </div>
    )
}

export default ProfilePage;
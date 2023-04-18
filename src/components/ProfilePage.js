import React from 'react';
function ProfilePage({user})
{

  const name = [
    {
      name: 'John',
      age: 1
    },
    {
      name: 'sina',
      age: 2
    }
  ];
  const nameList = name.map((hb, index) => <p>{hb.age}</p>)

    return(
        <div className="profile">
      <img src="./img/profilePicture.png" alt="Profile Picture" />
      <h2>{user.name}</h2>
        <li><strong>Email:</strong> {user.email}</li>
        <li><strong>Location:</strong> {user.location}</li>
        <li>{nameList}</li>

      
      
    </div>
    )
}

export default ProfilePage; 
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

  function calculate(a, b)
  {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
  }

  const [add, subtract, multiply, divide] = calculate(4, 7);


    return(
        <div className="profile">
      <img src="./img/profilePicture.png" alt="Profile Picture" />
      <h2>{user.name}</h2>
        <li><strong>Email:</strong> {user.email}</li>
        <li><strong>Location:</strong> {user.location}</li>
        {/* <li>{nameList}</li>

        <div>
          <h2>
      <p>Sum: {add}</p>
      <p>Difference: {subtract}</p>
      <p>Product: {multiply}</p>
      <p>Quotient: {divide}</p>
      </h2>
    </div> */}
          
        
    </div>
    )
}

export default ProfilePage; 
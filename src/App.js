import React, { useState } from 'react';
import './App.css';
import snowboardImage from './snowboard.jpg';

function App() {
  // State for the list of interests
  const [interests, setInterests] = useState([
    "Snowboarding",
    "Gaming",
    "Cooking",
    "Traveling"
  ]);

  // Function to reverse the list order
  const reverseList = () => {
    setInterests([...interests].reverse());
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Helloooo! Welcome to My Website!</h1>
        <p>I'm Tushar Ganta! I am currently a Junior studying CSSE at UWB. I love to go to the gym, hang out with my friends, and spend time outside. I love to snowboard with my friends, and even though it is something I picked up this season, I think I will be snowboarding for a good while</p>
        
        <figure>
          <img src={snowboardImage} alt="Me at Snoqualmie Pass" style={{ width: '200px', borderRadius: '10px' }} />
          <figcaption>Me at Snoqualmie Pass</figcaption> {/* This is the caption */}
        </figure>
        
        <p>My Interests!</p>
        <ul>
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
        <button onClick={reverseList}>Reverse List Order</button>
      </header>
    </div>
  );
}

export default App;

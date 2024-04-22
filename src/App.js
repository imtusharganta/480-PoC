import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import necessary components from 'react-router-dom'
import './App.css';
import snowboardImage from './snowboard.jpg';

// Component for the navigation bar
function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/things-to-read">Things to Read</Link></li>  
      </ul>
    </nav>
  );
}

function ThingsToRead() {
  const links = [
    { url: 'https://tracker.gg/valorant/profile/riot/Banga%23DINT/overview', title: 'My Valorant Profile' }, //Valorant Tracker
    { url: 'https://www.porsche.com/international/aboutporsche/christophorusmagazine/archive/379/articleoverview/article14/', title: 'History of Porsche' },
    { url: 'https://nishkitchen.com/hyderabadi-biryani-recipe/', title: 'My Favorite Dish and its Recipe' }, //Biryani Recipe
    { url: 'https://www.nytimes.com/games/wordle/index.html', title: 'Daily Wordle! I love doing this' }, //to play wordle
    { url: 'https://www.uwb.edu/news/', title: 'UWB Latest News' },
    { url: 'https://www.curated.com/shop/winter-sports', title: 'Snowboard Shopping!' },
    { url: 'https://neetcode.io/', title: 'Where I go for leetcode help' },
    { url: 'https://globle-game.com/', title: 'Wordle for Countries!' },
    { url: 'https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM?si=cgZ_eQyYSg6wr5_QoWxBUg', title: 'One of my Favorite Music Artists' },
    { url: 'https://www.youtube.com/@mkbhd', title: 'One of my favorite Youtubers' },
  ];

 return (
    <div className="ThingsToRead"> 
      <h2>Things to Read</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a></li>
        ))}
      </ul>
    </div>
  );
}

function Home() {
  const [interests] = useState([
    "Snowboarding",
    "Gaming",
    "Cooking",
    "Traveling"
  ]);

  return (
    <header className="App-header">
      <h1>Helloooo! Welcome to My Website!</h1>
      <p>I'm Tushar Ganta! I am currently a Junior studying CSSE at UWB. I love to go to the gym, hang out with my friends, and spend time outside. I love to snowboard with my friends, and even though it is something I picked up this season, I think I will be snowboarding for a good while</p>
      <figure>
        <img src={snowboardImage} alt="Me at Snoqualmie Pass" style={{ width: '200px', borderRadius: '10px' }} />
        <figcaption>Me at Snoqualmie Pass</figcaption>
      </figure>
      <p>My Interests!</p>
      <ul>
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/things-to-read" element={<ThingsToRead />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
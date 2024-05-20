import React from 'react';
import './BiryaniPage.css'; // Import the CSS styles specific to BiryaniPage
import chicken1 from './vertchicken.jpeg';
import chicken2 from './chicken2.jpeg';
import chicken3 from './chicken3.jpeg';

function BiryaniPage() {
  return (
    <div className="biryani-page page-container">
      <h1>Hyderabadi Chicken Biryani</h1>
      
      <h2>History</h2>
      <p>Hyderabadi Chicken Biryani is a popular and flavorful dish from the South Indian city of Hyderabad. 
        It's known for its aromatic spices, tender chicken, and delicious rice. 
        Let's dive into the rich history and recipe of this amazing dish!The origins of Hyderabadi Biryani can be traced back to the Mughal Empire. 
        It is said that the Nizams of Hyderabad popularized this dish, combining Mughlai and Andhra cuisine to create a unique and delightful meal.</p>
      <img src={chicken1} alt="Hyderabadi Biryani History" />

      <h2>Ingredients</h2>
      <p>The key ingredients of Hyderabadi Chicken Biryani include basmati rice, chicken, yogurt, onions, saffron, and a variety of spices such as cloves, cardamom, cinnamon, and bay leaves.</p>
      <div className="image-container">
        <img src={chicken2} alt="Biryani Ingredients" />
        <img src={chicken3} alt="Spices for Biryani" />
      </div>

      <h2>Recipe</h2>
      <p>To make Hyderabadi Chicken Biryani, marinate the chicken with yogurt and spices. Cook the rice separately and layer it with the marinated chicken. Cook it on a low flame to let the flavors blend together. Serve hot with raita or a boiled egg.</p>
    </div>
  );
}

export default BiryaniPage;

import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/banner.jpg';
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Burger</h1>
        <p>
          Baba Burger <br /> 125 TL
        </p>
        <Link to="/menu">
          <button>Satın Al</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import BannerImage from '../assets/1beef.jpg';

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          {' '}
          El değmeden özenle hazırladığımız menülerimiz, damak tadınızda
          alışkanlıklarınızı değiştirecektir. <br />
          <br />
          Biz sizin için buradayız...
        </p>
      </div>
    </div>
  );
}

export default About;

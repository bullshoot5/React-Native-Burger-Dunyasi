import React from 'react';
import BannerImage from '../assets/2blackbean.jpg';

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>İletişim</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Adınız ve Soyadınız</label>
          <input name="name" placeholder=".........." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder=".........." type="email" />
          <label htmlFor="message">Mesaj..</label>
          <textarea
            name="message"
            required
            rows="6"
            placeholder=".........."
          ></textarea>
          <button type="submit">Gönder</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

import React from 'react';
import '../assets/styles/Advertisement.css';
import Ad from '../assets/images/Sale.jpg';
import Adsreddit from '../assets/images/Ads.png';

const Advertisement = () => {
  return (
    <div className='advertise'>
      <img src={Ad} alt="" />
      <img src={Adsreddit} alt="" />
      <hr style={{marginTop:'75%'}}/>
      <div className="links">
        <ul style={{marginLeft:'5px'}}>
          <li>About</li>
          <li>Carrers</li>
          <li>Press</li>
        </ul>
        <ul>
          <li>Advertise</li>
          <li>Help</li>
          <li>Blog</li>
        </ul>
        <ul>
          <li>Reddit App</li>
          <li>Reddit Gold</li>
          <li>Reddit Hits</li>
        </ul>
      </div>
      <hr />
      <div className="footer">
        <p>&#169; 2024</p>
        <div className="terms">
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </div>
  )
}

export default Advertisement;
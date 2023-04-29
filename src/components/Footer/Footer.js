import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg'


function Footer() {
  return (
    <footer className="footer" id='library'>
      <div className="footer--container">
        <h1 className='text-gradient'>Do you want to step in to the future before others</h1>
        <button>Request Early Access</button>
        <div className="informations">
          <div className="brand">
            <img src={logo} alt="" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className="list">
            <div className="links">
              <h4>Links</h4>
              <ul>
                <li>Overons</li>
                <li>Social Media</li>
                <li>Counters</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="company">
              <h4>Company</h4>
              <ul>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="contact">
              <h4>Get in touch</h4>
              <ul>
                <li>Crechterwoord K12 182 DK Alknjkcb</li>
                <li><a href="phone: 085-132567">085-132567</a>085-132567</li>
                <li><a href="mailto: info@payme.net">info@payme.net</a></li>
              </ul>
            </div>
          </div>
        </div>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
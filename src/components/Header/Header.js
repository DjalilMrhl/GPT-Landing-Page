import React from 'react'
import './Header.css'
import AI from '../../assets/ai.avif'
import people from '../../assets/people.avif'
import atlassian from '../../assets/atlassian.avif'
import google from '../../assets/google.avif'
import dropbox from '../../assets/dropbox.avif'
import shopify from '../../assets/shopify.avif'
import stack from '../../assets/slack.avif'

function Header() {
  return (
    <header className='header' id='home'>
      <div className="header--container">
        <div className="description">
          <h1 className='text-gradient'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <form><input type="email" placeholder='your email adress'/><button className='btn-orange'>Get Started</button></form>
            <div className='people-reviews'>
              <img id='people' src={people} alt="" />
              <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
        </div>
        <img id='ai' src={AI} alt="AI"/>
        <footer className="brands">
          <div className="footer--container">
            <img src={google} alt="google-logo" />
            <img src={stack} alt="stack-logo"/>
            <img src={atlassian} alt="atlassian-logo"/>
            <img src={dropbox} alt="dropbox-logo"/>
            <img src={shopify} alt="shopify-logo"/>
          </div>
        </footer>
      </div>
    </header>
  )
}

export default Header
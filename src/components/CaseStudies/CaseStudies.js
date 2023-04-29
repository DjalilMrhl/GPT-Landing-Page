import React from 'react'
import './CaseStudies.css'
import img from '../../assets/possibility.avif'


function CaseStudies() {
  return (
    <section className="casestudies" id="casestudies">
      <div className="casestudies--container">
        <img src={img} alt="" />
        <div className="content">
          <p>Request Early Access to Get Started</p>
          <h1 className='text-gradient'>The possibilities are beyond your imagination</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <p>Request Early Access to Get Started</p>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
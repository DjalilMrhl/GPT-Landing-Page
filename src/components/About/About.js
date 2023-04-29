import React from 'react'
import './About.css'


function About() {
  return (
    <section className="about" id="about">
      <div className="about--container bg-about">
        <div className="col-1">
          <h3 className='bar-gradient'>What is GPT-3</h3>
          <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
        </div>
        <div className="col-2">
          <h3 className='text-gradient'>The possibilities are beyond your imagination</h3>
          <p>explore the library</p>
        </div>
        <div className="col-3">
          <div className="card">
            <h3 className='bar-gradient'>Chatbots</h3>
            <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
          </div>
          <div className="card">
            <h3 className='bar-gradient'>Knowledgebase</h3>
            <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
          </div>
          <div className="card">
            <h3 className='bar-gradient'>Education</h3>
            <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
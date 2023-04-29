import React from 'react'
import './Blogs.css'
import img1 from '../../assets/blog01.avif'
import img2 from '../../assets/blog02.avif'
import img3 from '../../assets/blog03.avif'
import img4 from '../../assets/blog04.avif'
import img5 from '../../assets/blog05.avif'

function Blogs() {

  const blog =  {
                  img: img1,
                  date: 'Sep 26, 2021',
                  title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
                }
              
  const blogs = [
    {
      img: img2,
      date: 'Sep 26, 2021',
      title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
    },
    {
      img: img3,
      date: 'Sep 26, 2021',
      title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
    },
    {
      img: img4,
      date: 'Sep 26, 2021',
      title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
    },
    {
      img: img5,
      date: 'Sep 26, 2021',
      title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
    }
  ]

  return (
    <section className="blogs" id="blogs">
      <div className="blogs--container">
        <h1 className='text-gradient'>A lot is happening, We are blogging about it.</h1>
        <article className="content">
          <div className="card--1">
            <img src={blog.img} alt={blog.title} />
            <div className="card-contentA">
              <span>{blog.date}</span>
              <h3>{blog.title}</h3>
              <a href="e">Read Full Article</a>
            </div>
          </div>
          <div className="cards">
{blogs.map(({img,date,title},index)=> { 
  return (<div className="card" key={index}>
            <img src={img} alt={title} />
            <div className="card-contentB">
              <span>{date}</span>
              <h3>{title}</h3>
              <a href="e">Read Full Article</a>
            </div>
          </div>
  )})}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Blogs
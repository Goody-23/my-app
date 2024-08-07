import React from 'react';
import "./about.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Welcome to BookHub, your go-to app for discovering books and enriching your reading journey. BookHub is a powerful and user-friendly Book Search App built with React JS, leveraging the Open Library Search API. Our goal is to help book enthusiasts like you find their next great read quickly and effortlessly. Whether you're searching for classic literature, modern bestsellers, or niche genres, BookHub has you covered.

With BookHub, you can easily search for books by title, author, or subject and get detailed information about each book, including author, edition, first publish year, and more. The app boasts a clean and intuitive interface designed for a seamless user experience. As a passionate developer and avid reader, I created BookHub to combine my love for books and technology. During the development process, I encountered and overcame numerous challenges, from handling API errors to optimizing the user interface. These experiences have shaped BookHub into a robust and reliable tool for book lovers everywhere.</p>
            <p className='fs-17'>Creating BookHub was an exciting journey filled with learning and problem-solving. Integrating the Open Library Search API provided comprehensive book data, and tackling various issues, including API response handling and npm package errors, ensured smooth functionality. I also focused on creating an engaging and responsive design, overcoming challenges with CSS styling and component rendering. I am always looking for feedback and suggestions to improve BookHub. Feel free to reach out if you have any ideas, comments, or just want to chat about books!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
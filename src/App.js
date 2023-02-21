import React from "react";

import * as ReactDOM from 'react-dom/client';
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById("root"))


const App = () => {
  React.useEffect(() => {
      document.title = "Jacob Anderson"
  })
  return (
      <section>
          <NavBar />
          <HeroSection />
          <AboutSection />
          <ProjectSection />
          <ContactSection />
          
          <Footer />
      </section>
  );
};
const NavBar = () => {
  React.useEffect(() => {
    /* adding functionality to nav buttons */
    const navLogo = document.getElementById("navbar-logo");
    const heroSection = document.getElementById("hero-section-background");
    navLogo.addEventListener("click", () => {
      heroSection.scrollIntoView({behavior: "smooth"});
    })

    const aboutButton = document.getElementById("navbar-about-button");
    const aboutSection = document.getElementById("about-section-wrapper");
    aboutButton.addEventListener("click", () => {
      aboutSection.scrollIntoView({behavior: "smooth"});
    })

    const workButton = document.getElementById("navbar-work-button");
    const projectSection = document.getElementById("project-section-wrapper");
    workButton.addEventListener("click", () => {
      projectSection.scrollIntoView({behavior: "smooth"});
    })

    const contactButton = document.getElementById("navbar-contact-button");
    const contactSection = document.getElementById("contact-section-wrapper");
    contactButton.addEventListener("click", () => {
      contactSection.scrollIntoView({behavior: "smooth"});
    })
    /* adding transition to background */
    const navBackground = document.getElementById("navbar-wrapper")
    const heroBackground = document.getElementById("hero-section-background")
    window.addEventListener("scroll", () => {
      if(parseInt(window.pageYOffset) < 903) {
        navBackground.style.backgroundColor = "rgb(25,25,30,0)";
        navBackground.style.backdropFilter = "none";
        heroBackground.style.opacity = "1";
      } else {
        navBackground.style.backgroundColor = "rgb(25,25,30, .6)";
        navBackground.style.backdropFilter = "blur(5px)";
        heroBackground.style.opacity = "0";
      }
    })
  })
  return (
    <section id="navbar-wrapper">
      <div id="navbar-logo" className="navbar-list-item"><span className="navbar-logo-bold">ANDERSON</span>DEVELOPES</div>
      <ul id="navbar-list">
        <li id="navbar-about-button" className="navbar-list-item">About</li>
        <li id="navbar-work-button" className="navbar-list-item">Work</li>
        <li id="navbar-contact-button" className="navbar-list-item">Contact</li>
      </ul>
    </section>
  )
};
const HeroSection = () => {
  React.useEffect(() => {
    /* adding animations and transitions to down arrow */
    const arrow = document.getElementById("hero-section-arrow")
    window.addEventListener("scroll", () => {
      arrow.style.opacity = ((parseInt(window.pageYOffset)) * -1 + 155) / 100
      arrow.style.top = ((parseInt(window.pageYOffset)/20) + 87) + "vh"
      if(parseInt(window.pageYOffset) > 0) {
        arrow.style.animation = "none";
      } else {
        arrow.style.animation = "bounce 1000ms";
        arrow.style.animationIterationCount = "infinite"
      }
    })
  })
  return (
    <section id="hero-section-background">
      <section id="hero-section-wrapper">
        <div id="hero-section-header">Development<br></br> and Design<br></br>for the<br></br> Modern Web</div>
      </section>
      <div id="hero-section-arrow"></div>
    </section>
  )
}
const AboutSection = () => {
  return (
    <section id="about-section-wrapper">
      <div id="about-section-picture" alt="personal-picture"></div>
      <div id="about-section-info">
        <h2 id="about-section-info-header">About</h2>
        <p id="about-section-info-paragraph">My name is Jacob, thanks for visting my website! I'm a fun loving and passionate website developer based in Grand Rapids, MI. I program and design modern, effective, and aesthetic websites for individuals and businesses with an emphasis in the front end, including branding and graphics.</p>
      </div>
    </section>
  )
}
const ProjectSection = () => {
  React.useEffect(() => {
    /* defining variables for carousel */
    const track = document.getElementById("carousel-track")
    const slides = Array.from(track.children)
    const nextButton = document.getElementById("carousel-button-right")
    const prevButton = document.getElementById("carousel-button-left")

    const slideWidth = slides[0].getBoundingClientRect().width;

    let currentSlideIndex = 0;

    slides.forEach((slide, index) => {
      slide.style.left = slideWidth * index + "px";
    })

    /* when right button is pressed, move slides to the right */
    nextButton.addEventListener("click", () => {
      const currentSlide = track.querySelector("#current-slide")
      const nextSlide = currentSlide.nextElementSibling;
      const amountToMove = nextSlide.style.left;
      /* increment current slide index */
      currentSlideIndex++
      /* adjustments based on slide index */
      if(currentSlideIndex == 0) {
        prevButton.style.opacity = .5;
      } else prevButton.style.opacity = .8;
      if(currentSlideIndex == 2) {
        nextButton.style.opacity = .5;
      } else nextButton.style.opacity = .81;
      /* move to next slide */
      track.style.transform = "translateX(-" + amountToMove + ")"
      currentSlide.removeAttribute("id")
      nextSlide.setAttribute("id", "current-slide")
      currentSlide.style.opacity = 0;
      nextSlide.style.opacity = 1;
    })
    /* when left button is pressed, move slides to the left */
    prevButton.addEventListener("click", () => {
      let currentSlide = track.querySelector("#current-slide")
      const prevSlide = currentSlide.previousElementSibling;
      const amountToMove = prevSlide.style.left;
      /* increment current slide index */
      currentSlideIndex--
      /* adjustments based on slide index */
      if(currentSlideIndex == 0) {
        prevButton.style.opacity = .3;
      } else prevButton.style.opacity = .8;
      if(currentSlideIndex == 2) {
        nextButton.style.opacity = .3;
      } else nextButton.style.opacity = .8;
      /* move to previous slide */
      track.style.transform = "translateX(-" + amountToMove + ")"
      currentSlide.removeAttribute("id")
      currentSlide.style.opacity = 0;
      prevSlide.style.opacity = 1;
      prevSlide.setAttribute("id", "current-slide")
    })
  })
  return (
    <section id="project-section-background">
    <div id="project-section-wrapper">
      <h2 id="project-section-header">Check Out My Projects</h2>
      <div id="carousel">
        <div className="carousel-button" id="carousel-button-left"></div>

        <div id="carousel-track-container">
          <ul id="carousel-track">
            <li className="carousel-slide" id="current-slide">
              <a href="https://jacobfanderson.com/Fakeflix/" target="_blank"><div id="carousel-slide-1" className="carousel-image"></div></a>
            </li>
            <li className="carousel-slide">
              <a href="https://jacobfanderson.com/GoogleClone/" target="_blank"><div id="carousel-slide-2" className="carousel-image"></div></a>
            </li>
           <li className="carousel-slide">
              <a href="https://jacobfanderson.com/StopWatch/" target="_blank"><div id="carousel-slide-3" className="carousel-image"></div></a>
            </li>
          </ul>
        </div>

        <div className="carousel-button" id="carousel-button-right"></div>
        
      </div>
      
    </div>
    </section>
  )
}
const ContactSection = () => {
  React.useEffect(() => {
    const submitButton = document.getElementById("form-submit-button")
    const nameInput = document.getElementById("form-name")
    const emailInput = document.getElementById("form-email")
    const messageInput = document.getElementById("form-message")
    submitButton.addEventListener("click", () => {
      if(emailInput.innerHTML != "") {
        console.log(emailInput.innerHTML)
        alert("Message Sent!")
      }
    })
  })
  return (
    <section id="contact-section-wrapper">
      <div id="contact-section-call-to-action">
        <h2 id="contact-section-call-header">Contact</h2>
        <h3 id="contact-section-call-to-action-statement">Have any BIG ideas?</h3>
        <p id="contact-section-call-paragraph">Send me a message and lets make it real! Any type of inquiry is completely welcome.</p>
      </div>
      <form id="contact-section-form">
        <label htmlFor="form-name">Name</label>
        <input type="text" id="form-name" name="form-name" placeholder="Your name.."required></input>

        <label htmlFor="form-email">Email</label>
        <input type="text" id="form-email" name="form-email" placeholder="Your email.." required></input>

        <label htmlFor="form-message">Message</label>
        <textarea id="form-message" name="form-message" placeholder="Write something.." cols={21} rows={5} required></textarea>

        <button id="form-submit-button">Send</button>
      </form>
    </section>
  )
}
const Footer = () => {
  React.useEffect(() => {
    /* adding functionality to nav buttons */
    const aboutButton = document.getElementById("footer-nav-about-button");
    const aboutSection = document.getElementById("about-section-wrapper");
    aboutButton.addEventListener("click", () => {
      aboutSection.scrollIntoView({behavior: "smooth"});
    })

    const workButton = document.getElementById("footer-nav-work-button");
    const projectSection = document.getElementById("project-section-wrapper");
    workButton.addEventListener("click", () => {
      projectSection.scrollIntoView({behavior: "smooth"});
    })

    const contactButton = document.getElementById("footer-nav-contact-button");
    const contactSection = document.getElementById("contact-section-wrapper");
    contactButton.addEventListener("click", () => {
      contactSection.scrollIntoView({behavior: "smooth"});
    })
  })
  return (
    <section id="footer-wrapper">
      <ul id="footer-nav-list">
        <li className="footer-nav-list-item" id="footer-nav-about-button">About</li>
        <li className="footer-nav-list-item" id="footer-nav-work-button">Work</li>
        <li className="footer-nav-list-item" id="footer-nav-contact-button">Contact</li>
      </ul>
    </section>
  )
}

root.render(
  <App />
)
import React from "react";

import * as ReactDOM from 'react-dom/client';
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById("root"))


const App = () => {
  React.useEffect(() => {
      document.title = "Home Page"
  })
  return (
      <section>
          <NavBar />
          <HeroSection />
          <AboutSection />
          <ProjectSection />
          <ContactSection />
          <TechSection />
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
      <div id="navbar-logo" className="navbar-list-item"><div className="navbar-logo-bold">ANDERSON</div>DEVELOPES</div>
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
      <img id="about-section-picture" alt="personal-picture"></img>
      <div id="about-section-info">
        <h2 id="about-section-info-header">About</h2>
        <p id="about-section-info-paragraph">My name is Jacob, thanks for visting my website! I'm a fun loving and passionate website developer based in Grand Rapids, MI. I program and design modern, effective, and aesthetic websites for individuals and businesses with an emphasis in the front end, including branding and graphics.</p>
      </div>
    </section>
  )
}
const ProjectSection = () => {
  return (
    <section id="project-section-wrapper">Project Section</section>
  )
}
const ContactSection = () => {
  return (
    <section id="contact-section-wrapper">
      <div id="contact-section-call-to-action">
        <h2 id="contact-section-call-header">Contact</h2>
        <p id="contact-section-call-paragraph">Have any big ideas? Just send me a message and lets make it real! Any type of inquiry is completely welcome.</p>
      </div>
      <form id="contact-section-form">
        <label htmlFor="form-name">Name</label>
        <input type="text" id="form-name" name="form-name" placeholder="Your name.."></input>

        <label htmlFor="form-email">Email</label>
        <input type="text" id="form-email" name="form-email" placeholder="Your email.."></input>

        <label htmlFor="form-message">Message</label>
        <textarea id="form-message" name="form-message" placeholder="Write something.." cols={21} rows={5}></textarea>

        <button id="form-submit-button">Send</button>
      </form>
    </section>
  )
}
const TechSection = () => {
  return (
    <section id="tech-section-wrapper">Tech Section</section>
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
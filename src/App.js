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
    /* adding functionality to mobile drop down menu */
    const body = document.body;
    const mobileMenuList = document.getElementById("mobile-navbar-list")
    const dropDownButton = document.getElementById("mobile-dropdown-icon");
    const mobileMenu = document.getElementById("mobile-navbar-wrapper");
    dropDownButton.addEventListener("click", () => {
      if(mobileMenu.style.width != "40vw") {
        mobileMenuList.style.display = "flex";
        mobileMenu.style.width = "40vw";

        /* disable scrolling */
        body.style.overflow = "hidden"
        body.style.height = "100%"
      } else {
        mobileMenuList.style.display = "none";
        mobileMenu.style.width = "0vw";
      }
    })


    /* adding functionality to nav buttons */
    const navLogo = document.getElementById("navbar-logo");
    const heroSection = document.getElementById("hero-section-background");
    navLogo.addEventListener("click", () => {
      heroSection.scrollIntoView({behavior: "smooth"});
    })

    const aboutSection = document.getElementById("about-section-wrapper");
    const aboutButton = Array.from(document.getElementsByClassName("navbar-about-button"));
    aboutButton.forEach(item => {
      item.addEventListener("click", () => {
        mobileMenuList.style.display = "none";
        mobileMenu.style.width = "0vw";

        /* enable scrolling */
        body.style.overflow = "auto"
        body.style.height = "auto"
        aboutSection.scrollIntoView({behavior: "smooth"});
      })
    })

    const projectSection = document.getElementById("project-section-wrapper");
    const workButton = Array.from(document.getElementsByClassName("navbar-work-button"));
    workButton.forEach(item => {
      item.addEventListener("click", () => {
        mobileMenuList.style.display = "none";
        mobileMenu.style.width = "0vw";

        /* enable scrolling */
        body.style.overflow = "auto"
        body.style.height = "auto"
        projectSection.scrollIntoView({behavior: "smooth"});
      })
    })

    const contactSection = document.getElementById("contact-section-wrapper");
    const contactButton = Array.from(document.getElementsByClassName("navbar-contact-button"));
    contactButton.forEach(item => {
      item.addEventListener("click", () => {
        mobileMenuList.style.display = "none";
        mobileMenu.style.width = "0vw";

        /* enable scrolling */
        body.style.overflow = "auto"
        body.style.height = "auto"
        contactSection.scrollIntoView({behavior: "smooth"});
      })
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
        <li className="navbar-list-item navbar-about-button">About</li>
        <li className="navbar-list-item navbar-work-button">Work</li>
        <li className="navbar-list-item navbar-contact-button">Contact</li>
        <a href="https://github.com/Ander-Jac" target="_blank"><div id="navbar-github-button" className="navbar-list-item"></div></a>
        <a href="https://www.linkedin.com/in/jake-anderson-028549236/" target="_blank"><div id="navbar-linkedin-button" className="navbar-list-item"></div></a>
      </ul>

      <div id="mobile-dropdown-icon"></div>

      <div id="mobile-navbar-wrapper">
      <ul id="mobile-navbar-list">
        <li className="mobile-navbar-list-item navbar-about-button">About</li>
        <li className="mobile-navbar-list-item navbar-work-button">Work</li>
        <li className="mobile-navbar-list-item navbar-contact-button">Contact</li>
        <ul id="mobile-navbar-icon-list">
          <a href="https://github.com/Ander-Jac" target="_blank"><div id="navbar-github-button" className="mobile-navbar-list-item mobile-navbar-link-icon"></div></a>
          <a href="https://www.linkedin.com/in/jake-anderson-028549236/" target="_blank"><div id="navbar-linkedin-button" className="mobile-navbar-list-item mobile-navbar-link-icon"></div></a>
        </ul>
      </ul>
      </div>
    </section>
  )
};
const HeroSection = () => {
  React.useEffect(() => {
    /* adding animations and transitions to down arrow */
    const arrow = document.getElementById("hero-section-arrow")
    const aboutSection = document.getElementById("about-section-wrapper");
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
    arrow.addEventListener("click", () => {
      aboutSection.scrollIntoView({behavior: "smooth"});
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
        <h2 id="about-section-info-header">About Me</h2>
        <p id="about-section-info-paragraph">Hi, I'm Jacob, thanks for visting my website! I'm a fun loving and passionate website developer based in Grand Rapids, MI. I program and design modern, effective, and aesthetic websites for individuals and businesses with an emphasis in the front end, including branding and graphics.</p>
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
        <h3 id="contact-section-call-to-action-statement">Have any big ideas?</h3>
        <p id="contact-section-call-paragraph">Send me a message and lets make it real! Any type of inquiry is completely welcome.</p>
      </div>
      <form action="https://formsubmit.co/jajake253@gmail.com" method="POST" id="contact-section-form">
        <label htmlFor="form-name">Name</label>
        <input type="text" id="form-name" name="form-name" placeholder="Your name.."required></input>

        <label htmlFor="form-email">Email</label>
        <input type="text" id="form-email" name="form-email" placeholder="Your email.." required></input>

        <label htmlFor="form-message">Message</label>
        <textarea id="form-message" name="form-message" placeholder="Write something.." cols={21} rows={5} required></textarea>

        <button id="form-submit-button">Send</button>

        <input type="hidden" name="_next" value="https://jacobfanderson.com/thankyou.html"></input>
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
      <div id="footer-code-link">Check Out This Site's <a href="https://github.com/Ander-Jac/Portfolio-Site" target="_blank">Source Code</a></div>
    </section>
  )
}

root.render(
  <App />
)
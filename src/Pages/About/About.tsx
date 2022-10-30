import React, { useEffect } from "react";
import "./About.css"

const About = () => {

  useEffect(()=> { 

    const intro = document.querySelector<HTMLElement>(".intro")!
    // let logo = document.querySelector<HTMLElement>(".logo-header")
    let logoSpan = document.querySelectorAll<HTMLElement>('.logo')
    
    // console.log("content loaded.");
    setTimeout(() => {

      logoSpan.forEach((span, index) => {
        setTimeout(() => {
          span.classList.add("active");
        }, (index + 1) * 400);
      })

      setTimeout(()=> {
        logoSpan.forEach((span, index) => {
          setTimeout(() => {
            span.classList.remove("active")
            span.classList.add("fade")
          }, (index + 1) * 50)
        })
      }, 2000 )

      setTimeout(()=> {
        intro.style.top = "-100vh"
      }, 2300 )

    })

  }, [])

  return (
    <div className="containerProfile">
      <div className="intro">
        <h1 className="logo-header">
          <span className="logo">About&nbsp;</span>
          <span className="logo">Page.</span>
        </h1>
      </div>

      <header className="headerTop">
        <h4>About Page.</h4>
      </header>
    </div>
  )

}

export default About
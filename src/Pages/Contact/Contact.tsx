import React, { useRef, useState } from "react";
import "./Contact.css"

const Contact = () => {

  const pathRef = useRef<SVGPathElement>(null)

 

  // console.log("page refreshed")

  const [animateToTop, setAnimateToTop] = useState(true)

  let y: number
  let c: number

  if(animateToTop) {
    y = 100
    c = 100
  } else {
    y = 0
    c = 0
  }

  const toggleAnimation = () => {
    setAnimateToTop(!animateToTop)
    // console.log("toggle icindeki y = ", y)
    animate()
  }

  const lerp = (start: number, end: number, t: number) => {
    return start * (1-t) + end * t
  }


  let path = document.querySelector(".path")   
    
  const animate = () => {
    if(animateToTop) {
      // console.log("first fired")
      // console.log("y = ", y)      
      y = Number(lerp(y, 0, 0.065).toFixed(2))
      c = Number(lerp(c, 0, 0.085).toFixed(2))
      pathRef.current?.setAttribute("d", `M 0 ${y} L 0 100 100 100 100 ${y} C 50 ${c}, 50 ${c}, 0 ${y}`)
      if (y<0.3) return y=0
      
    } else {
      // console.log("second fired")
      // console.log("y = ", y)
      y = Number(lerp(y, 100, 0.065).toFixed(2))
      c = Number(lerp(c, 100, 0.085).toFixed(2))
      pathRef.current?.setAttribute("d", `M 0 ${y} L 0 100 100 100 100 ${y} C 50 ${c}, 50 ${c}, 0 ${y}`)
      if(y>99.7) return y=100
  }
    requestAnimationFrame(animate)
  }
  
  animate()


  return ( 
    <div className="wrapper">
      <button onClick={toggleAnimation}>Click me!</button>
      <svg className="transition" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path ref={pathRef} className="path" stroke="#000000" fill="#fcc42a" strokeWidth={3} vectorEffect="non-scaling-stroke"
        d="M 0 100 L 0 100 100 100 100 100 C 50 100, 50 100, 0 100"
        />
      </svg>
    </div>
  )

}

export default Contact
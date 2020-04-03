import React from "react"

import "./testimonial.css"

const Testimonial = props => {
  return (
    <div id="stage" className="testimonial">
      <div className="testimonial-content">
        <p>{props.message}</p>
        <small>-- {props.author}</small>
      </div>
    </div>
  )
}

export default Testimonial

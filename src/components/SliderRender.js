import React from "react"
import { Slider, Slide } from "react-materialize"
import Testimonial from "./Testimonial"

import "./slider.css"

const SliderRender = () => {
  return (
    <div className="slider-render section text-width">
      <h1>Testimonials</h1>
      <Slider>
        <Slide
          src="http://lorempixel.com/580/250/nature/1"
          title="This is our big Tagline!"
        >
          <Testimonial />
        </Slide>
        <Slide
          src="http://lorempixel.com/580/250/nature/1"
          title="This is our big Tagline!"
        >
          <Testimonial />
        </Slide>
        <Slide
          src="http://lorempixel.com/580/250/nature/1"
          title="This is our big Tagline!"
        >
          <Testimonial />
        </Slide>
      </Slider>
    </div>
  )
}

export default SliderRender

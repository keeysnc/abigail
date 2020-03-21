import React from "react"
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"

import "./testimonial.css"

const Testimonial = () => (
  <div className="testimonial">
    <p>
      Teaching Driving Courses Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
      aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
      dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
      est Lorem ipsum dolor sit amet. Lorem ipsum dolor
    </p>
    <small>
      -<FormattedMessage id="hello">Name</FormattedMessage>
    </small>
  </div>
)

export default Testimonial

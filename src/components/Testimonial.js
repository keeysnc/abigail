import React from "react"
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"

import "./testimonial.css"

const Testimonial = props => (
  <div className="testimonial">
    <p>{props.message}</p>
    <small>-- {props.author}</small>
  </div>
)

export default Testimonial

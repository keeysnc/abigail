import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./paragraphSection.css"

const Paragraph = props => {
  return (
    <div className="paragraph section">
      <h1>{props.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.message }} />
    </div>
  )
}

export default Paragraph

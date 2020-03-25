import React from "react"
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"
import Image from "../components/image"
import { useStaticQuery, graphql } from "gatsby"

import "./paragraphSection.css"

const Paragraph = props => {
  const data = useStaticQuery(graphql`
    query {
      accreditedLogo: file(relativePath: { eq: "accredited-biz-logo.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div className="paragraph section">
      <h1>{props.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.message_en }} />
      <div dangerouslySetInnerHTML={{ __html: props.message_es }} />
      <br />
      <Image visual={data.accreditedLogo.childImageSharp.fixed} />
    </div>
  )
}

export default Paragraph

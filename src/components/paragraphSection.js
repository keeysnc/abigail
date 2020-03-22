import React from "react"
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"
import Image from "../components/image"
import { useStaticQuery, graphql } from "gatsby"

import "./paragraphSection.css"

const Paragraph = props => {
  let homePath = window.location.pathname
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
      <h1>{props.pagetitle}</h1>
      <p>
        {props.message}
        <br />
        <Image
          visual={
            homePath === "/en/" || "/es/"
              ? data.accreditedLogo.childImageSharp.fixed
              : " "
          }
        />
      </p>
    </div>
  )
}

export default Paragraph

import { Link } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import "./hero.css"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="hero">
      <BackgroundImage
        className="img-container"
        fluid={data.hero.childImageSharp.fluid}
      >
        <div className="hero-content">
          <h4>Abigail's Driving School</h4>
          <p>
            The only English and Spanish language driving school provider in the
            Richmond Metropolitan area
          </p>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default Hero

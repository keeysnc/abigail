import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "./hero.css"

const Hero = props => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero-img.png" }) {
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
      <div className="hero-content container">
        <h1>Abigail's Driving School</h1>
        <h5>{props.herotitle}</h5>
        <div className="btn hero-btn">ABOUT US</div>
      </div>
      <BackgroundImage
        className="img-container"
        fluid={data.hero.childImageSharp.fluid}
      ></BackgroundImage>
    </div>
  )
}

export default Hero

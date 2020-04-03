import React, { useRef, useEffect } from "react"
import { Link } from "gatsby-plugin-intl"
import { TweenMax, TimelineLite, Power3 } from "gsap"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import "./hero.css"

const Hero = props => {
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
  let tl = new TimelineLite()
  let heroAnime = useRef(null)

  useEffect(() => {
    const heroAnimeText = heroAnime.firstElementChild.children[2]
    TweenMax.to(heroAnime, 0, { css: { opacity: "1" } })
    TweenMax.to(heroAnimeText, 0, { css: { opacity: "1" } })
    tl.from(heroAnime, 1, {
      y: 150,
      ease: Power3.easeOut,
      delay: 0.8,
    })
      .from(
        heroAnime,
        2,
        {
          opacity: 0,
          ease: Power3.easeOut,
          delay: 0.8,
        },
        0.2
      )
      .from(heroAnimeText, 1, { y: 50, ease: Power3.easeOut, delay: 1 }, 0.5)
      .from(
        heroAnimeText,
        1,
        {
          opacity: 0,
          ease: Power3.easeOut,
          delay: 1,
        },
        0.5
      )
  })

  return (
    <div className="hero" ref={el => (heroAnime = el)}>
      <BackgroundImage
        className="img-container"
        fluid={data.hero.childImageSharp.fluid}
      >
        <div className="hero-content">
          <h4>Abigail's Driving School</h4>
          <p>{props.herotitle}</p>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default Hero

import { Link } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React, { useRef, useEffect } from "react"
import { TweenMax, TimelineLite, Power3 } from "gsap"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import Language from "./language"
import Image from "./image"
import NavMenu from "./navMenu"

import "./header.css"

const Header = ({ siteTitle, props }) => {
  const intl = useIntl()
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  let tl = new TimelineLite()
  let navContainer = useRef(null)

  useEffect(() => {
    console.log("header")
    const navBar = navContainer.children[0]
    const translateBar = navContainer.children[1]

    TweenMax.to(navBar, 0, { css: { visibility: "visible" } })
    TweenMax.to(translateBar, 0, { css: { visibility: "visible" } })

    tl.from(
      navBar,
      1.5,
      {
        y: 10,
        opacity: "0",
        ease: Power3.easeOut,
      },
      0.2
    )
    tl.from(
      translateBar,
      2,
      {
        y: 0,
        opacity: "0",
        ease: Power3.easeOut,
      },
      0.2
    )
  })

  return (
    <header className="container" ref={el => (navContainer = el)}>
      <div className="nav-container">
        <div className="hero-content-line">
          <div className="logo hero-content-line-inner">
            <Link to="/">
              <Image src={siteTitle} visual={data.logo.childImageSharp.fluid} />
            </Link>
          </div>
        </div>

        <div className="hero-content-line">
          <div className="nav-menu hero-content-line-inner">
            <NavMenu
              home={intl.formatMessage({
                id: "home.menu_items.home",
              })}
              about={intl.formatMessage({
                id: "home.menu_items.about",
              })}
              services={intl.formatMessage({
                id: "home.menu_items.services",
              })}
              driversImp={intl.formatMessage({
                id: "home.menu_items.drivers_imp",
              })}
              registration={intl.formatMessage({
                id: "home.menu_items.registration",
              })}
              faq={intl.formatMessage({
                id: "home.menu_items.faq",
              })}
              training={intl.formatMessage({
                id: "home.menu_items.training",
              })}
            />
          </div>
        </div>
      </div>
      <div className="hero-content-line">
        <div className="translate hero-content-line-inner">
          <Language />
          <Link
            style={{
              marginTop: "20px",
            }}
            className="btn"
            to="/news"
          >
            News
          </Link>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

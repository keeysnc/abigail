import { Link } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React from "react"
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
  return (
    <header className="container">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <Image src={siteTitle} visual={data.logo.childImageSharp.fluid} />
          </Link>
        </div>
        <div className="nav-menu">
          <NavMenu
            home={intl.formatMessage({
              id: "home.menu_items.home",
            })}
            about={intl.formatMessage({
              id: "home.menu_items.about",
            })}
            driversEd={intl.formatMessage({
              id: "home.menu_items.drivers_ed",
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
      <div className="translate">
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

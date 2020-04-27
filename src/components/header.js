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
        <div className="mobile-menu hide-on-large-only show-on-medium-and-down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="0 0 37 37"
          >
            <g id="Group_6" data-name="Group 6" transform="translate(-301 -24)">
              <g id="Backward" transform="translate(301 60.571) rotate(-90)">
                <rect
                  id="Rectangle_1073"
                  data-name="Rectangle 1073"
                  width="37"
                  height="37"
                  rx="10"
                  transform="translate(-0.429)"
                  fill="#e4f2ef"
                />
              </g>
              <g id="Menu" transform="translate(311 35)">
                <path
                  id="Menu-2"
                  data-name="Menu"
                  d="M-6160,14V12h10v2Zm0-6V6h16V8Zm0-6V0h16V2Z"
                  transform="translate(6160)"
                  fill="#00b37b"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="nav-menu hide-on-med-and-down">
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
          <div
            style={{ marginTop: "10px" }}
            className="translate hide-on-med-and-down"
          >
            <Language />
          </div>
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

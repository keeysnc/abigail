import { Link } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Language from "./language"
import Image from "./image"
import NavMenu from "./navMenu"

import "./header.css"

const Header = ({ siteTitle }) => {
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
          <NavMenu />
        </div>
      </div>
      <div className="translate">
        <Language />
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

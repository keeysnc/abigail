import { Link } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React from "react"

import "./navMenu.css"

const NavMenu = () => (
  <div className="nav-menu">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/drivers-education">Drivers Education</Link>
    <Link to="/drivers-improvement">Drivers Improvement</Link>
    <Link to="/registration">Registration</Link>
    <Link to="/faq">FAQ</Link>
  </div>
)

export default NavMenu

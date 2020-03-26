import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React from "react"

import "./navMenu.css"

const NavMenu = props => (
  <div className="nav-menu">
    <Link to="/">{props.home}</Link>
    <Link to="/about">{props.about}</Link>
    <Link to="/drivers-education">{props.driversEd}</Link>
    <Link to="/drivers-improvement">{props.driversImp}</Link>
    <Link to="/registration">{props.registration}</Link>
    <Link to="/faq">{props.faq}</Link>
    <Link to="/online-training">{props.training}</Link>
  </div>
)

export default NavMenu

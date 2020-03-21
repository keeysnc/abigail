/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, withPrefix } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"

import Header from "./header"
import FooterRender from "./FooterRender"
import "./layout.css"

const Layout = ({ children, intl }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={intl.formatMessage({ id: "title" })} />
      <div className="container">
        <main>{children}</main>
      </div>
      <footer>
        <FooterRender />
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout)

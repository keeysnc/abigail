import React from "react"
import { FormattedMessage, injectIntl, navigate } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Paragraph from "../components/paragraphSection"

const About = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "title_page2" })} />
    <Paragraph />
    <h1>
      <FormattedMessage id="hello_page2" />
    </h1>
    <a
      href="#"
      onClick={e => {
        e.preventDefault()
        navigate("/")
      }}
    >
      {intl.formatMessage({ id: "go_back" })}
    </a>
  </Layout>
)

export default injectIntl(About)

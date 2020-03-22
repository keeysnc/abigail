import React from "react"
import { FormattedMessage, injectIntl, navigate } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Paragraph from "../components/paragraphSection"

const About = ({ intl }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "title_page2" })}
      />
      <Paragraph
        message={intl.formatMessage({ id: "about.message" })}
        pagetitle={intl.formatMessage({ id: "about.pagetitle" })}
      />
    </Layout>
  )
}

export default injectIntl(About)

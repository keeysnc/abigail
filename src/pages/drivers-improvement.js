import React from "react"
import { FormattedMessage, injectIntl, navigate } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardRender from "../components/CardRender"

const DriversImprovement = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "title_page2" })} />
    <CardRender pagetitle={"Drivers Improvement"} />
    <p>
      <FormattedMessage id="welcome_page2" />
    </p>
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

export default injectIntl(DriversImprovement)

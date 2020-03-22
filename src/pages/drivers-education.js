import React from "react"
import { FormattedMessage, injectIntl, navigate } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardRender from "../components/CardRender"
import AccordionRender from "../components/AccordionRender"

const DriversEd = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "title_page2" })} />
    <CardRender pagetitle={"Drivers Education"} />
    <AccordionRender pagetitle={"Registration"} />
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

export default injectIntl(DriversEd)

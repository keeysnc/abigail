import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FormRender from "../components/form"
import CardRender from "../components/CardRender"
import HorizontalRule from "../components/HorizontalRule"

const Registration = ({ intl }) => {
  return (
    <Layout>
      <CardRender
        pagetitle={intl.formatMessage({ id: "registration.pagetitle" })}
        message={intl.formatMessage({ id: "registration.message" })}
      />
      <HorizontalRule />
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "registration.title" })}
      />
      <FormRender />
    </Layout>
  )
}

export default injectIntl(Registration)

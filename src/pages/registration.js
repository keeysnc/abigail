import React from "react"
import { FormattedMessage, injectIntl, navigate } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FormRender from "../components/form"
import CardRender from "../components/CardRender"
import HorizontalRule from "../components/HorizontalRule"

const Registration = ({ intl }) => {
  let message = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ips`
  return (
    <Layout>
      <CardRender message={message} pagetitle={"Register Today!"} />
      <HorizontalRule />
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "title_page2" })}
      />
      <FormRender />
    </Layout>
  )
}

export default injectIntl(Registration)

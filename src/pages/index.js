import React from "react"
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import "../../node_modules/materialize-css/dist/css/materialize.min.css"
import "../../node_modules/materialize-css/dist/js/materialize.min.js"

import SEO from "../components/seo"
import Hero from "../components/hero"
import Paragraph from "../components/paragraphSection"
import SliderRender from "../components/SliderRender"
import HorizontalRule from "../components/HorizontalRule"

const IndexPage = () => {
  const intl = useIntl()

  return (
    <Layout>
      <Hero herotitle={intl.formatMessage({ id: "home.herotitle" })} />
      <HorizontalRule altColor={false} />
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "home.title" })}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <Paragraph
        message={intl.formatMessage({ id: "home.mission" })}
        pagetitle={intl.formatMessage({ id: "home.pagetitle" })}
      />
      <HorizontalRule altColor={false} />
      <SliderRender />
    </Layout>
  )
}

export default IndexPage

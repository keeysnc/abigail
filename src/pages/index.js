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
  let pagetitle = `Our Mission`
  let message = `Vision: To become a household name in Virginia by ensuring each student can drive safely drive out on the streets and the in real world while facing different variable and dangers from their surrounding environment.
  Mission: To provide a learning friendly environment that consists of decreasing anxiety through practice, reinforcement and achieving customized goals.`

  return (
    <Layout>
      <Hero />
      <HorizontalRule altColor={false} />
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "title" })}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <Paragraph message={message} pagetitle={pagetitle} />
      <HorizontalRule altColor={false} />
      <SliderRender />
    </Layout>
  )
}

export default IndexPage

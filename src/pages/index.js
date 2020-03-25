import React from "react"
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import "react-materialize"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import Hero from "../components/hero"
import Paragraph from "../components/paragraphSection"
import SliderRender from "../components/SliderRender"
import HorizontalRule from "../components/HorizontalRule"

const IndexPage = () => {
  const intl = useIntl()
  const data = useStaticQuery(graphql`
    query {
      home: markdownRemark(fileAbsolutePath: { regex: "/home/" }) {
        frontmatter {
          title
        }
        id
        html
      }
    }
  `)
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
        title={intl.formatMessage({ id: "home.pagetitle" })}
        message_en={data.home.html}
        message_es={data.home.html}
      />
      <HorizontalRule altColor={false} />
      {/* <SliderRender /> */}
    </Layout>
  )
}

export default IndexPage

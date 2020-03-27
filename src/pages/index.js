import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import "materialize-css/dist/css/materialize.min.css"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Paragraph from "../components/paragraphSection"
import SimpleSlider from "../components/SimpleSlider"
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
        message={data.home.html}
      />
      <HorizontalRule altColor={false} />
      <SimpleSlider
        title={intl.formatMessage({
          id: "home.testimonials.testimonial_title",
        })}
      />
    </Layout>
  )
}

export default IndexPage

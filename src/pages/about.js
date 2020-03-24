import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Paragraph from "../components/paragraphSection"

const About = ({ intl }) => {
  const dataAbout = useStaticQuery(graphql`
    query {
      about: markdownRemark(
        id: { eq: "f6fcb3c5-3786-550a-8ead-653706d9165f" }
      ) {
        frontmatter {
          description_en
          description_es
        }
        fileAbsolutePath
      }
    }
  `)
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "title_page2" })}
      />
      <Paragraph
        message_es={dataAbout.about.frontmatter.description_es}
        message_en={dataAbout.about.frontmatter.description_en}
        title={intl.formatMessage({ id: "about.pagetitle" })}
      />
    </Layout>
  )
}

export default injectIntl(About)

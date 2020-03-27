import React from "react"
import { FormattedMessage, injectIntl, navigate } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Paragraph from "../components/paragraphSection"

const Faq = ({ intl }) => {
  const data = useStaticQuery(graphql`
    query {
      faq: markdownRemark(fileAbsolutePath: { regex: "/faq/" }) {
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
      <SEO lang={intl.locale} title={intl.formatMessage({ id: "faq.title" })} />
      <Paragraph
        title={intl.formatMessage({ id: "faq.pagetitle" })}
        message={data.faq.html}
      />
    </Layout>
  )
}

export default injectIntl(Faq)

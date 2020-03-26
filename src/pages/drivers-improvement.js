import React from "react"
import { FormattedMessage, injectIntl, navigate } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardRender from "../components/CardRender"
import CourseInfo from "../components/CourseInfo"
import HorizontalRule from "../components/HorizontalRule"
import Accordion from "../components/Accordion"

const DriversImprovement = ({ intl }) => {
  const data = useStaticQuery(graphql`
    query {
      driversImp: markdownRemark(
        fileAbsolutePath: { regex: "/drivers-improvement/" }
      ) {
        frontmatter {
          title
          string
        }
        id
        html
      }
    }
  `)
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "drivers_improvement.title" })}
      />
      <CardRender
        pagetitle={intl.formatMessage({ id: "drivers_improvement.pagetitle" })}
        message={intl.formatMessage({ id: "drivers_improvement.message" })}
      />
      <HorizontalRule />
      <CourseInfo
        message={data.driversImp.html}
        title={data.driversImp.frontmatter.string}
      />
    </Layout>
  )
}

export default injectIntl(DriversImprovement)

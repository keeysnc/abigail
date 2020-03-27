import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CardRender from "../components/CardRender"
import CourseInfo from "../components/CourseInfo"
import HorizontalRule from "../components/HorizontalRule"
import Accordion from "../components/Accordion"

const DriversEd = ({ intl }) => {
  const data = useStaticQuery(graphql`
    query {
      courses: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/courses/" } }
      ) {
        nodes {
          fileAbsolutePath
          html
          frontmatter {
            title
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "drivers_education.title" })}
      />
      <CardRender
        pagetitle={intl.formatMessage({ id: "drivers_education.pagetitle" })}
        message={intl.formatMessage({ id: "drivers_education.message" })}
      />
      <HorizontalRule />
      <Accordion>
        <div label={data.courses.nodes[0].frontmatter.title}>
          <CourseInfo message_en={data.courses.nodes[0].html} />
        </div>
        <div label={data.courses.nodes[1].frontmatter.title}>
          <CourseInfo message_en={data.courses.nodes[1].html} />
        </div>
        <div label={data.courses.nodes[2].frontmatter.title}>
          <CourseInfo message_en={data.courses.nodes[2].html} />
        </div>
        <div label={data.courses.nodes[3].frontmatter.title}>
          <CourseInfo message_en={data.courses.nodes[3].html} />
        </div>
        <div label={data.courses.nodes[4].frontmatter.title}>
          <CourseInfo message_en={data.courses.nodes[4].html} />
        </div>
        <div label={data.courses.nodes[5].frontmatter.title}>
          <CourseInfo message_en={data.courses.nodes[5].html} />
        </div>
      </Accordion>
    </Layout>
  )
}

export default injectIntl(DriversEd)

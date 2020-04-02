import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CardRender from "../components/CardRender"
import CourseInfo from "../components/CourseInfo"
import HorizontalRule from "../components/HorizontalRule"
import Accordion from "../components/Accordion"

const Services = ({ intl }) => {
  const data = useStaticQuery(graphql`
    query {
      courses: markdownRemark(fileAbsolutePath: { regex: "/courses/" }) {
        frontmatter {
          title
        }
        id
        html
      }
      coursesEs: markdownRemark(fileAbsolutePath: { regex: "/courses-es/" }) {
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
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "services.title" })}
      />
      <CardRender
        pagetitle={intl.formatMessage({ id: "services.pagetitle" })}
        message={intl.formatMessage({ id: "services.message" })}
      />
      <HorizontalRule />
      <Accordion>
        <div label={data.courses.nodes[0].frontmatter.title}>
          <CourseInfo message={data.courses.nodes[0].html} />
        </div>
        <div label={data.courses.nodes[1].frontmatter.title}>
          <CourseInfo message={data.courses.nodes[1].html} />
        </div>
        <div label={data.courses.nodes[2].frontmatter.title}>
          <CourseInfo message={data.courses.nodes[2].html} />
        </div>
        <div label={data.courses.nodes[3].frontmatter.title}>
          <CourseInfo message={data.courses.nodes[3].html} />
        </div>
      </Accordion>
    </Layout>
  )
}

export default injectIntl(Services)

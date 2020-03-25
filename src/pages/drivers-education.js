import React from "react"
import { FormattedMessage, injectIntl, navigate } from "gatsby-plugin-intl"
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
      courses: markdownRemark(fileAbsolutePath: { regex: "/courses/" }) {
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
        title={intl.formatMessage({ id: "drivers_education.title" })}
      />
      <CardRender
        pagetitle={intl.formatMessage({ id: "drivers_education.pagetitle" })}
        message={intl.formatMessage({ id: "drivers_education.message" })}
      />
      <HorizontalRule />
      {/* <Accordion>
        <div label="{data.courses.frontmatter.title}">
          <CourseInfo
            message_en={data.courses.html}
            message_es={data.courses.html}
          />
        </div>
      </Accordion> */}
      <Accordion>
        <div label={data.courses.frontmatter.title}>
          <CourseInfo
            message_en={data.courses.html}
            message_es={data.courses.html}
          />
        </div>
        <div></div>
      </Accordion>
    </Layout>
  )
}

export default injectIntl(DriversEd)

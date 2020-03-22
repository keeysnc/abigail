import React from "react"
import { FormattedMessage, injectIntl, navigate } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardRender from "../components/CardRender"
import CourseInfo from "../components/CourseInfo"
import HorizontalRule from "../components/HorizontalRule"

const DriversImprovement = ({ intl }) => {
  return (
    <Layout>
      <SEO lang={intl.locale} title={intl.formatMessage({ id: "pagetitle" })} />
      <CardRender
        pagetitle={intl.formatMessage({ id: "drivers_improvement.pagetitle" })}
        message={intl.formatMessage({ id: "drivers_improvement.message" })}
      />
      <HorizontalRule />
      <CourseInfo
        courseName={intl.formatMessage({
          id: "drivers_improvement.course.title",
        })}
        description={intl.formatMessage({
          id: "drivers_improvement.course.description",
        })}
        price={intl.formatMessage({ id: "drivers_improvement.course.price" })}
        topics={intl.formatMessage({ id: "drivers_improvement.course.topics" })}
        regulations={intl.formatMessage({
          id: "drivers_improvement.course.regulations",
        })}
        requirements={intl.formatMessage({
          id: "drivers_improvement.course.requirements",
        })}
      />
    </Layout>
  )
}

export default injectIntl(DriversImprovement)

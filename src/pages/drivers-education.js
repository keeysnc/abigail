import React from "react"
import { FormattedMessage, injectIntl, navigate } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardRender from "../components/CardRender"
import CourseInfo from "../components/CourseInfo"
import HorizontalRule from "../components/HorizontalRule"
import Accordion from "../components/Accordion"

const DriversEd = ({ intl }) => {
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
        <div label="Alligator Mississippiensis">
          <CourseInfo
            courseName={intl.formatMessage({
              id: "drivers_education.course.title",
            })}
            description={intl.formatMessage({
              id: "drivers_education.course.description",
            })}
            price={intl.formatMessage({ id: "drivers_education.course.price" })}
            topics={intl.formatMessage({
              id: "drivers_education.course.topics",
            })}
            regulations={intl.formatMessage({
              id: "drivers_education.course.regulations",
            })}
            requirements={intl.formatMessage({
              id: "drivers_education.course.requirements",
            })}
          />
        </div>
        <div label="Alligator Sinensis">
          <CourseInfo
            courseName={intl.formatMessage({
              id: "drivers_education.course.title",
            })}
            description={intl.formatMessage({
              id: "drivers_education.course.description",
            })}
            price={intl.formatMessage({ id: "drivers_education.course.price" })}
            topics={intl.formatMessage({
              id: "drivers_education.course.topics",
            })}
            regulations={intl.formatMessage({
              id: "drivers_education.course.regulations",
            })}
            requirements={intl.formatMessage({
              id: "drivers_education.course.requirements",
            })}
          />
        </div>
        <div label="Alligator Sinensis">
          <CourseInfo
            courseName={intl.formatMessage({
              id: "drivers_education.course.title",
            })}
            description={intl.formatMessage({
              id: "drivers_education.course.description",
            })}
            price={intl.formatMessage({ id: "drivers_education.course.price" })}
            topics={intl.formatMessage({
              id: "drivers_education.course.topics",
            })}
            regulations={intl.formatMessage({
              id: "drivers_education.course.regulations",
            })}
            requirements={intl.formatMessage({
              id: "drivers_education.course.requirements",
            })}
          />
        </div>
        <div label="Alligator Sinensis">
          <CourseInfo
            courseName={intl.formatMessage({
              id: "drivers_education.course.title",
            })}
            description={intl.formatMessage({
              id: "drivers_education.course.description",
            })}
            price={intl.formatMessage({ id: "drivers_education.course.price" })}
            topics={intl.formatMessage({
              id: "drivers_education.course.topics",
            })}
            regulations={intl.formatMessage({
              id: "drivers_education.course.regulations",
            })}
            requirements={intl.formatMessage({
              id: "drivers_education.course.requirements",
            })}
          />
        </div>
        <div label="Alligator Sinensis">
          <CourseInfo
            courseName={intl.formatMessage({
              id: "drivers_education.course.title",
            })}
            description={intl.formatMessage({
              id: "drivers_education.course.description",
            })}
            price={intl.formatMessage({ id: "drivers_education.course.price" })}
            topics={intl.formatMessage({
              id: "drivers_education.course.topics",
            })}
            regulations={intl.formatMessage({
              id: "drivers_education.course.regulations",
            })}
            requirements={intl.formatMessage({
              id: "drivers_education.course.requirements",
            })}
          />
        </div>
        <div label="Alligator Sinensis">
          <CourseInfo
            courseName={intl.formatMessage({
              id: "drivers_education.course.title",
            })}
            description={intl.formatMessage({
              id: "drivers_education.course.description",
            })}
            price={intl.formatMessage({ id: "drivers_education.course.price" })}
            topics={intl.formatMessage({
              id: "drivers_education.course.topics",
            })}
            regulations={intl.formatMessage({
              id: "drivers_education.course.regulations",
            })}
            requirements={intl.formatMessage({
              id: "drivers_education.course.requirements",
            })}
          />
        </div>
      </Accordion>
    </Layout>
  )
}

export default injectIntl(DriversEd)

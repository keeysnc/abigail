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
  return (
    <Layout>
      <SEO lang={intl.locale} title={intl.formatMessage({ id: "pagetitle" })} />
      <CardRender
        pagetitle={intl.formatMessage({ id: "drivers_improvement.pagetitle" })}
        message={intl.formatMessage({ id: "drivers_improvement.message" })}
      />
      <HorizontalRule />
      {/* <Accordion>
        <div label={data.driverEd.frontmatter.title}>
          <CourseInfo
            message_en={data.driverEd.html}
            message_es={data.driverEd.html}
          />
        </div>
      </Accordion> */}
    </Layout>
  )
}

export default injectIntl(DriversImprovement)

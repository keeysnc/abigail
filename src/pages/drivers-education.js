import React from "react"
import { FormattedMessage, injectIntl, navigate } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardRender from "../components/CardRender"
import AccordionRender from "../components/AccordionRender"
import CourseInfo from "../components/CourseInfo"
import HorizontalRule from "../components/HorizontalRule"

const DriversEd = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "title_page2" })} />
    <CardRender pagetitle={"Drivers Education"} />
    <HorizontalRule />
    <CourseInfo />
    <AccordionRender pagetitle={"Registration"} />
  </Layout>
)

export default injectIntl(DriversEd)

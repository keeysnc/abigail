import React from "react"
import { FormattedMessage, injectIntl, navigate } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardRender from "../components/CardRender"
import CourseInfo from "../components/CourseInfo"
import HorizontalRule from "../components/HorizontalRule"

const Training = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "title_page2" })} />
    <CardRender pagetitle={"Online Training"} />
    <HorizontalRule />
    <CourseInfo />
    {/* <p>
      <FormattedMessage id="welcome_page2" />
    </p>
    <a
      href="#"
      onClick={e => {
        e.preventDefault()
        navigate("/")
      }}
    >
      {intl.formatMessage({ id: "go_back" })}
    </a> */}
  </Layout>
)

export default injectIntl(Training)

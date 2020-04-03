import React, { useEffect } from "react"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import "materialize-css/dist/css/materialize.min.css"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Paragraph from "../components/paragraphSection"
import SimpleSlider from "../components/SimpleSlider"
import HorizontalRule from "../components/HorizontalRule"

const IndexPage = () => {
  const intl = useIntl()
  const data = useStaticQuery(graphql`
    query {
      home: markdownRemark(fileAbsolutePath: { regex: "/home/" }) {
        frontmatter {
          title
        }
        id
        html
      }
      homeEs: markdownRemark(fileAbsolutePath: { regex: "/hogar/" }) {
        frontmatter {
          title
        }
        id
        html
      }
      accreditedLogo: file(relativePath: { eq: "accredited-biz-logo.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const path = typeof window !== "undefined" ? window.location.pathname : ""
  return (
    <Layout>
      <Hero herotitle={intl.formatMessage({ id: "home.herotitle" })} />
      <HorizontalRule altColor={false} />
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "home.title" })}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <Paragraph
        title={intl.formatMessage({ id: "home.pagetitle" })}
        message={path.match("/en/") ? data.home.html : data.homeEs.html}
      />
      <Image visual={data.accreditedLogo.childImageSharp.fixed} />
      <HorizontalRule altColor={false} />
      <SimpleSlider
        title={intl.formatMessage({
          id: "home.testimonials.testimonial_title",
        })}
      />
    </Layout>
  )
}

export default IndexPage

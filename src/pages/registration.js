import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"
import CardRender from "../components/CardRender"
import HorizontalRule from "../components/HorizontalRule"
import { useStaticQuery } from "gatsby"

const Registration = ({ intl }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     products: allMarkdownRemark(
  //       filter: { fileAbsolutePath: { regex: "/products/" } }
  //     ) {
  //       nodes {
  //         fileAbsolutePath
  //         frontmatter {
  //           text
  //           string
  //           number
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout>
      <CardRender
        pagetitle={intl.formatMessage({ id: "registration.pagetitle" })}
        message={intl.formatMessage({ id: "registration.message" })}
      />
      <HorizontalRule />
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "registration.title" })}
      />

      {/* <Form
        productOne={[
          data.products.nodes[0].frontmatter.string,
          data.products.nodes[0].frontmatter.text,
          data.products.nodes[0].frontmatter.number,
        ]}
        productTwo={[
          data.products.nodes[1].frontmatter.string,
          data.products.nodes[1].frontmatter.text,
          data.products.nodes[1].frontmatter.number,
        ]}
        productThree={[
          data.products.nodes[2].frontmatter.string,
          data.products.nodes[2].frontmatter.text,
          data.products.nodes[2].frontmatter.number,
        ]}
        productFour={[
          data.products.nodes[3].frontmatter.string,
          data.products.nodes[3].frontmatter.text,
          data.products.nodes[3].frontmatter.number,
        ]}
        productFive={[
          data.products.nodes[4].frontmatter.string,
          data.products.nodes[4].frontmatter.text,
          data.products.nodes[4].frontmatter.number,
        ]}
      /> */}
    </Layout>
  )
}

export default injectIntl(Registration)

import React, { useRef, useEffect } from "react"
import { Card, CardTitle, Icon, Col, Row } from "react-materialize"
import { useStaticQuery, graphql } from "gatsby"
// import { TweenMax, TimelineLite, TimelineMax, Power3 } from "gsap"
// import ScrollMagic from "scrollmagic"
// import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap"

import "../components/CardRender.css"

const CardRender = props => {
  const data = useStaticQuery(graphql`
    query {
      services: file(relativePath: { eq: "drivers-ed.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="section card-hero">
      <Row>
        <Col m={12} s={12} className={"split-card"} style={{ display: "flex" }}>
          <Col
            className={"card-text desktop"}
            m={4}
            s={12}
            style={{
              padding: "40px",
              backgroundColor: "#01b37b",
            }}
          >
            <h3>{props.pagetitle}</h3>
            <p>{props.message}</p>
          </Col>
          <Col m={8} s={12} style={{ padding: "0", lineHeight: "0" }}>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={data.services.childImageSharp.fluid.src}
            ></img>
          </Col>
          <Col
            className={"card-text mobile"}
            m={12}
            s={12}
            style={{ padding: "40px", backgroundColor: "#01b37b" }}
          >
            <h3>{props.pagetitle}</h3>
            <p>{props.message}</p>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default CardRender

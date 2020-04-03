import React, { useRef, useEffect } from "react"
import { Card, CardTitle, Icon, Col, Row } from "react-materialize"
import { useStaticQuery, graphql } from "gatsby"
import { TweenMax, TimelineLite, TimelineMax, Power3 } from "gsap"
import ScrollMagic from "scrollmagic"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap"

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
  let tl5 = new TimelineMax()
  let controller = new ScrollMagic.Controller()
  let card = useRef(null)
  ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)
  useEffect(() => {
    TweenMax.to(card, 0, { css: { visibility: "visible" } })

    tl5.from(card, 1.5, {
      y: 75,
      opacity: "0",
      ease: Power3.easeOut,
    })
  })
  return (
    <div id="stage" className="section">
      <Row>
        <Col m={12} s={12}>
          <div ref={el => (card = el)}>
            <Card
              closeicon={<Icon>close</Icon>}
              header={
                <CardTitle image={data.services.childImageSharp.fluid.src} />
              }
              horizontal
              revealicon={<Icon>more_vert</Icon>}
            >
              <h3>{props.pagetitle}</h3>
              <p>{props.message}</p>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default CardRender

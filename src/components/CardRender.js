import React from "react"
import { Card, CardTitle, Icon, Col, Row } from "react-materialize"
import { useStaticQuery, graphql } from "gatsby"

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
    <div className="section">
      <Row>
        <Col m={12} s={12}>
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
        </Col>
      </Row>
    </div>
  )
}

export default CardRender

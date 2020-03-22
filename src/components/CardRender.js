import React from "react"
import { Card, CardTitle, Icon, Col, Row } from "react-materialize"
import { useStaticQuery, graphql } from "gatsby"

const CardRender = props => {
  let pagePath = window.location.pathname
  const data = useStaticQuery(graphql`
    query {
      driversEd: file(relativePath: { eq: "drivers-ed.png" }) {
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
            closeIcon={<Icon>close</Icon>}
            header={
              <CardTitle
                image={
                  pagePath === "/en/drivers-education/" ||
                  "/es/drivers-education/"
                    ? data.driversEd.childImageSharp.fluid.src
                    : " "
                }
              />
            }
            horizontal
            revealIcon={<Icon>more_vert</Icon>}
          >
            <h2>{props.pagetitle}</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            eget condimentum nisl, sit amet tempus dui. Nam augue diam, mollis
            ac sodales at, ultrices eu lectus. Aliquam venenatis ex euismod
            tellus varius, nec pretium nisl commodo. Cras tempor nec mi ac
            dictum. Suspendisse pharetra mauris vitae mi ullamcorper porttitor.
            Pellentesque tempus faucibus eros et egestas. Praesent ut tellus
            nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default CardRender

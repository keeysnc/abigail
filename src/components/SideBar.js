import React from "react"

import "./SideBar.css"
import HorizontalRule from "./HorizontalRule"

const SideBar = props => {
  return (
    <div id="stage" className="section">
      <div style={{ marginBottom: "20px" }}>
        <h3>Register Today</h3>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <div className="btn hero-btn">REGISTER HERE!</div>
      </div>
      <HorizontalRule altColor={"horizontal-line"} />
      <h6 style={{ fontWeight: "600", paddingTop: "20px" }}>
        Question? Give us a call
      </h6>
      <p>
        <span>Phone: </span>
      </p>
    </div>
  )
}

export default SideBar

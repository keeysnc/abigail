import React, { Component } from "react"
import PropTypes from "prop-types"
import HorizontalRule from "./HorizontalRule"

import "../components/Accordion.css"

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  onClick = () => {
    this.props.onClick(this.props.label)
  }

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this

    return (
      <div
        className="accordion-section"
        style={{
          background: isOpen ? "#F7F7F7" : "#F7F7F7",
          padding: "5px 10px",
        }}
      >
        <div
          onClick={onClick}
          style={{
            cursor: "pointer",
          }}
        >
          <h5>{label}</h5>
          <div
            style={{
              float: "right",
              top: "-40px",
              position: "relative",
            }}
          >
            {!isOpen && <span>&#9650;</span>}
            {isOpen && <span>&#9660;</span>}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              background: "#F7F7F7",
              marginTop: 10,
              padding: "10px 20px",
            }}
          >
            {this.props.children}
          </div>
        )}
        <HorizontalRule />
      </div>
    )
  }
}

export default AccordionSection

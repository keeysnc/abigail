import React from "react"

const CourseInfo = props => {
  return (
    <div className="section">
      <div dangerouslySetInnerHTML={{ __html: props.message_en }} />
      <div dangerouslySetInnerHTML={{ __html: props.message_es }} />
      <button>Link to registration page</button>
    </div>
  )
}

export default CourseInfo

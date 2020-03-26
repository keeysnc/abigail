import React from "react"

const CourseInfo = props => {
  return (
    <div className="section">
      <h4 dangerouslySetInnerHTML={{ __html: props.title }} />
      <div dangerouslySetInnerHTML={{ __html: props.message }} />
      <button>Link to registration page</button>
    </div>
  )
}

export default CourseInfo

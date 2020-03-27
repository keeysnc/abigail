import React from "react"
import { Link } from "gatsby-plugin-intl"

const CourseInfo = props => {
  return (
    <div className="section">
      <h4 dangerouslySetInnerHTML={{ __html: props.title }} />
      <div dangerouslySetInnerHTML={{ __html: props.message }} />
      <Link to="/registration" class="waves-effect waves-light btn">
        Register
      </Link>
    </div>
  )
}

export default CourseInfo

import React from "react"

const CourseInfo = props => {
  return (
    <div className="section">
      <h3>{props.courseName}</h3>
      <p className="description">
        {props.description}
        {/* Virginia requires students younger than 18 years of age who are home
        schooled or have not taken the course in high school to complete 36 -
        fifty-minute classroom course instruction before taking the behind the
        wheel class. To pass the classroom portion of the driver education
        course, a minimum score of 80% is required. Driver education classes are
        held on Monday - Saturdays (between 4pm-6pm) with flexible hours to
        accommodate parents/guardians. The class lasts four - five weeks
        depending on the student's school/extracurricular activities schedule. */}
      </p>
      <ul className="topics">
        {props.topics}
        {/* <li>Basic Driving Techniques</li>
        <li>Alcohol Safety</li>
        <li>Drug Abuse Awareness</li>
        <li>Defensive Driving</li>
        <li>Rules of the Road</li>
        <li>Motorcycle Awareness</li>
        <li>Adverse Driving Conditions</li> */}
      </ul>
      <h3>
        Price: <span className="price">{props.price}</span>
      </h3>
      <h5>Requirements</h5>
      <p>
        {props.requirements}
        {/* To pass the classroom portion of the driver education course, a minimum
        score of 80% is required. */}
      </p>
      <h5>Regulations</h5>
      <p>
        {props.regulations}
        {/* To pass the classroom portion of the driver education course, a minimum
        score of 80% is required. Online Option: COMING SOON */}
      </p>
      <button>Link to registration page</button>
    </div>
  )
}

export default CourseInfo

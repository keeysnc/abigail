import React from "react"
import { FormattedMessage, injectIntl, navigate } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardRender from "../components/CardRender"
import AccordionRender from "../components/AccordionRender"
import CourseInfo from "../components/CourseInfo"
import HorizontalRule from "../components/HorizontalRule"

const DriversEd = ({ intl }) => {
  let message = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet`
  let pagetitle = `Drivers Education`
  let courseName = `Eight-Hour Driver Improvement Clinic`
  let description = `The driver improvement clinic educates and refreshes both new and experienced drivers about defensive driving techniques in order to minimize risk. We are State of Virginia DMV Approved and Licensed. 
  Program: Our driver improvement course uses the National Traffic Safety Institute (NTSI) Defensive Driving Program. NTSI is one of the first defensive driving programs established in 1974. Abigail's Driving School follows NTSI's belief that values + attitude = behavior. It is through personal responsibility that has the potential to modify driving behaviors.`
  let price = `$80`
  let requirements = `Under 21: For those under the age of 21, you must take the driver improvement class after each infraction until you are over 21.
  `
  let regulations = `Voluntarily: If the course is taken voluntarily, you will receive up to five safe driving points towards your driving record.
  Court: If the court assigns you to take this course you will not receive any safe driving points unless you have a court document stating otherwise. However, it will help you with a ticket.
  DMV: If instructed by the DMV to take the class, you will receive driving points depending on your current record. Verify with Virginia DMV. 
  Cost: The class is $80. Classes are held on Saturday mornings and upon request on weekdays and Sundays, same price call or text 804-256-3147. 
  Length of class for drivers aged 55 years and older: Per Virginia Administrative Code 24VAC20-40-30 (B) the eight hours of class time can be divided over at least a two-day period for individuals 55 years and older. This will guarantee flexibility for your schedule and also allow you to get time to digest and understand all the safety information learned. 
  For details on the 8 hour driver improvement class read DMV's publication A Different Kind of Crash Course DI Program `
  let topics = ``
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "title_page2" })}
      />
      <CardRender pagetitle={pagetitle} message={message} />
      <HorizontalRule />
      <CourseInfo
        courseName={courseName}
        description={description}
        price={price}
        topics={topics}
        regulations={regulations}
        requirements={requirements}
      />
      <AccordionRender pagetitle={"Registration"} />
    </Layout>
  )
}

export default injectIntl(DriversEd)

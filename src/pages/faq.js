import React from "react"
import { FormattedMessage, injectIntl, navigate } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Paragraph from "../components/paragraphSection"

const Faq = ({ intl }) => {
  let pagetitle = `FAQ`
  let message = `We have tried to answer all relevant questions. Please read this prior to calling.

  How do you apply for a learner's permit in Virginia?
  Visit Applying for a Learner's Permit page on Virginia's Department of Motor Vehicle's website.
  How do you get a license in Virginia?
  Visit Applying for  Driver's License page on Virginia's Department of Motor Vehicle's website. 
  What is the deal with driving points?
  The following violations are grouped according to the number of DMV demerit points assigned to each violation. The number of years that the conviction stays on your DMV record is in parentheses beside each violation. An asterisk (*) indicates that the conviction remains on your record permanently.
  
  Six Point Violations 
  Four Point Violations
  Three Point Violations
  
  Will Abigail's Driving School honor in-class drivers education from another school?
  Yes, as long as you have proof of completing the in-class portion in advance of enrolling with Abigail's Driving School.
  Why is your price higher than other schools?
  You are paying for quality.  Our business model is focused on quality as opposed to quantity. We are not competing to see who can train the most students, but rather we are in business that seeks to produce qualified drivers in the Commonwealth.
  
  Do you have payment plan?
  No we do not, however, payment decisions are decided on an individual basis. We require $50 deposit when you register. We require at minimum of 50% of remaining balance on the first day of class.
  
  Are you going to issue my license?
  Teen: If you are a teenager and have met the state requirement for permit hold period, age, hours of driving - we will issue your TDL 180 (temporary drivers license for 180 days) upon completion of your behind the wheel and classroom. 
  
  Adult: If you complete the 60 day waiver program, we issue DTS D - a paper that qualifies you to go to the DMV so you are able to exchange your learner's permit for a drivers license. 
  
  Do i need to have basic driving skills?
  Prior to enrolling we encourage you to have at minimum of 15 hours of driving. Why? Do you want to waste $400 plus driving in a parking lot? We are insured, all our cars have dual brake system and student driver signs. We want to get you comfortable driving on the road.
  
  Do you issue learner's permit? Can you tell me what my driving record is like? 
  No you need to contact the DMV - MyDMV Account
  
  Will you pick up and drop off for behind the wheel classes?
  Yes, we pick up and drop off. Please be mindful that we do not provide services in areas 10 plus miles away from our central office, i.e. Hopewell, Goochland, Midlothian etc. 
  
  Even if i had a license in the past, do i have to wait for 60 days?
  Contact the DMV to get specific questions such as this.
  
  Will you accept a permit from another state?
  No, please get your learner's permit before enrolling in our in-class and/or behind the wheel drivers education course.
  
  How soon can i start?
  Start time/date is first come/first serve.
  
  If i take a re-exam course for in-class due to failing the learner's permit test - and i do not pass again at the DMV, can i take the course with you again without paying?
  Of course. 
  
  Do you have discounts?
  Unfortunately, we do not offer discounts unless you are affiliated with a specific non-profit and/or are in receipt of services from a service provider. Proof and validation required. 
  
  Do I need car insurance?
  According to the Virgina DMV, you must certify that your vehicle is covered by the minimum insurance requirements, or pay the Uninsured Motor Vehicle Fee. Your insurance carrier must be authorized to conduct business in Virginia. Check out this extensive guide on car insurance to find comparisons, helpful information, and things to consider when seeking the right car insurance for you.
  
  Link to Virginia DMV: https://www.dmv.virginia.gov/vehicles/#insurance.asp
  Link to Uninsured Motor Vehicle Fee information: https://www.dmv.virginia.gov/vehicles/#uninsured_fee.asp
  Link to Guide on Car Insurance: https://www.consumersadvocate.org/car-insurance`

  return (
    <Layout>
      <SEO lang={intl.locale} title={intl.formatMessage({ id: "faq.title" })} />
      <Paragraph pagetitle={pagetitle} message={message} />
    </Layout>
  )
}

export default injectIntl(Faq)

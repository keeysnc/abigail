import React from "react"
import { Footer } from "react-materialize"
import { injectIntl } from "gatsby-plugin-intl"
import HorizontalRule from "../components/HorizontalRule"
import "./footer.css"

const FooterRender = ({ intl }) => {
  const footerStyles = {
    color: "#50E3C2",
  }
  return (
    <div className="footer-render">
      <Footer
        copyrights={`Built by Like Water Design, LLC: Copyright ${new Date().getFullYear()}`}
      >
        <h1 className="white-text contact-title">
          {intl.formatMessage({ id: "contact.contact" })}
        </h1>
        <HorizontalRule altColor={true} />
        <ul className="contact-list">
          <li>
            <span>
              <b>{intl.formatMessage({ id: "contact.phone" })}: </b>
            </span>
            <a class="" href="tel:8042563147">
              804-256-3147
            </a>
          </li>
          <li>
            <span>
              <b>{intl.formatMessage({ id: "contact.mobile" })}: </b>
            </span>
            <a href="tel:8042563147">804-256-3147</a>
          </li>
          <li>
            <span>
              <b>{intl.formatMessage({ id: "contact.email" })}: </b>
            </span>
            abigailsInstructor@gmail.com
          </li>
          <li>
            <span>
              <b>{intl.formatMessage({ id: "contact.hours" })}: </b>
            </span>
            With Appointment
          </li>
          <li>
            <span>
              <b>{intl.formatMessage({ id: "contact.contact_hours" })}: </b>
            </span>
            24/7
          </li>
          <li>
            <span>
              <b>{intl.formatMessage({ id: "contact.address" })}: </b>
              <br />
              6002 W. Broad St., Suite 203
              <br />
              Richmond, VA 23230
            </span>
            <br />
            <span>
              (Office Open Per Appointment)
              <br />
              **Next to Mekong Restaurant
            </span>
          </li>
          <li>
            <span>
              <b>{intl.formatMessage({ id: "contact.service_area" })}: </b>
              <br />
            </span>
            <span>Richmond, VA</span>
            <br />
            <span>Henrico County</span>
            <br />
            <span>Chesterfield County</span>
          </li>
          <div className="social-media">
            <li>
              <a style={footerStyles} className="text-lighten-3" href="#!">
                Facebook
              </a>
            </li>
            <li>
              <a style={footerStyles} className="text-lighten-3" href="#!">
                Twitter
              </a>
            </li>
          </div>
        </ul>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111489.18005525714!2d-77.53977893371655!3d37.668487607253354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b116c99d0dc009%3A0xf22a5fe2a8ee0f76!2sAbigail&#39;s%20Driving%20School!5e0!3m2!1sen!2sus!4v1585315330517!5m2!1sen!2sus"
          width="100%"
          height="400px"
        ></iframe>
      </Footer>
    </div>
  )
}

export default injectIntl(FooterRender)

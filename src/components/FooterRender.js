import React from "react"
import { Footer } from "react-materialize"

import HorizontalRule from "../components/HorizontalRule"
import "./footer.css"

const FooterRender = props => {
  const footerStyles = {
    color: "#50E3C2",
  }
  return (
    <div className="footer-render">
      <Footer
        copyrights={`Built by Like Water Design, LLC: Copyright ${new Date().getFullYear()}`}
      >
        <h1 className="white-text contact-title">Contact</h1>
        <HorizontalRule altColor={true} />
        <ul className="contact-list">
          <li>
            <span>
              <b>Phone: </b>
            </span>
            804-256-3147
          </li>
          <li>
            <span>
              <b>Mobile: </b>
            </span>
            804-256-3147
          </li>
          <li>
            <span>
              <b>Email: </b>
            </span>
            abigailsInstructor@gmail.com
          </li>
          <li>
            <span>
              <b>Hours: </b>
            </span>
            With Appointment
          </li>
          <li>
            <span>
              <b>Customer Contact Hours: </b>
            </span>
            24/7
          </li>
          <li>
            <span>
              <b>Address: </b>
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
              <b>Service Area: </b>
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
      </Footer>
    </div>
  )
}

export default FooterRender

import React from "react"

export default props => (
  <form
    name="contact"
    method="post"
    action="/success"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="contact" value="contact" />
    <div>
      <h3>Courses</h3>
      <select name="products" id="products-select" required multiple>
        <option selected="default">Select</option>
        <option value={props.productOne[0]}>
          {props.productOne[0]} | {props.productOne[1]} | {props.productOne[2]}
        </option>
        <option value={props.productTwo[0]}>
          {props.productTwo[0]} | {props.productTwo[1]} | {props.productTwo[2]}
        </option>
        <option value={props.productThree[0]}>
          {props.productThree[0]} | {props.productThree[1]} |
          {props.productThree[2]}
        </option>
        <option value={props.productFour[0]}>
          {props.productFour[0]} | {props.productFour[1]} |
          {props.productFour[2]}
        </option>
        <option value={props.productFive[0]}>
          {props.productFive[0]} | {props.productFive[1]} |
          {props.productFive[2]}
        </option>
      </select>
      <label htmlFor="products-select">Products</label>
    </div>

    <div className="section">
      <h3>Student Info</h3>
      <div>
        <input type="text" name="student-name" id="student-name" />
        <label htmlFor="student-name">Student Name</label>
      </div>
      <div>
        <input type="text" name="parent-name" id="parent-name" />
        <label htmlFor="parent-name">Parent Name</label>
      </div>
      <div>
        <input type="text" name="email" id="email" />
        <label htmlFor="email">Email</label>
      </div>
    </div>
    <div>
      <select
        name="has-taken-drivers-ed"
        id="has-taken-drivers-ed"
        required
        multiple
      >
        <option value="" selected="selected">
          Select
        </option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
        <option value="not-applicable">Not Applicable</option>
      </select>
      <label htmlFor="has-taken-drivers-ed">
        Has the student taken in-class drivers education, and can you provide
        proof of completion? **Only Teens
      </label>
      <div>
        <input type="text" name="student-cell" id="student-cell" />
        <label htmlFor="student-cell">Student Cell</label>
      </div>
      <div>
        <input type="text" name="parent-cell" id="parent-cell" />
        <label htmlFor="parent-cell">Parent Cell</label>
      </div>
      <div>
        <input type="text" name="address-line-1" id="address-line-1" />
        <label htmlFor="address-line-1">Address 1</label>
        <input type="text" name="address-line-2" id="address-line-2" />
        <label htmlFor="address-line-2">Address 2</label>
        <input type="text" name="city" id="city" />
        <label htmlFor="city">City</label>
        <div className="section">
          <select className="state" id="state" name="state" required>
            <option value="" selected="default">
              Select
            </option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          <label htmlFor="state">State</label>
          <div></div>
          <div className="section">
            <select id="how-many-hours" name="how-many-hours" required multiple>
              <option value="" selected="selected">
                Select
              </option>
              <option value="0-hours">0 Hours</option>
              <option value="5-10-hours">5 to 10 Hours</option>
              <option value="10-20-hours">10 to 20 Hours</option>
              <option value="20-hours">20+ Hours</option>
              <option value="20-hours">
                Completed the 45h Journal- Teenagers
              </option>
            </select>
            <label htmlFor="how-many-hours">
              Please identify the number of hours you have driven so far?
            </label>
          </div>
        </div>
        <div>
          <select id="desired-times" name="desired-times" required>
            <option selected="default">Select</option>
            <option value="session-1">Session 1: 6am - 10am</option>
            <option value="session-2">Session 2: 10am - 2pm</option>
            <option value="session-3">Session 3: 2pm - 6pm</option>
            <option value="session-4">Session 4: 6am - 6pm</option>
            <option value="session-5">Flexible</option>
          </select>
          <label htmlFor="desired-times">Desired Times</label>
        </div>
      </div>
      <div className="section">
        <select id="days" name="days" required multiple>
          <option value="" selected="selected">
            Select
          </option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
        </select>
        <label htmlFor="days">Days</label>
      </div>
      <div>
        <input type="text" name="reference" id="reference" />
        <label htmlFor="reference">How did you hear about our school?</label>
      </div>
      <div>
        <h3>Payment Options</h3>
        <select id="payment" name="payment" required>
          <option value="" selected="selected">
            Select
          </option>
          <option value="check">Check</option>
          <option value="credit">Credit</option>
          <option value="cash">Card</option>
        </select>
        <label htmlFor="payment">Payment</label>
      </div>
      <div className="section">
        <h3>Terms and Agreements</h3>
        <ol>
          <li>
            For every behind the wheel lesson, the student must drive at minimum
            1hr at home
          </li>
          <li>
            Parents allow the enrolled student to drive the school’s vehicle
            during behind the wheel lesson.
          </li>
          <li>
            Fees are payable by cash, personal check, money order or credit
            cards (processing fees apply for credit card) prior to
            receipt/awarding of relevant certification.
          </li>
          <li>
            Clients must pay $50 non-refundable deposit to secure behind the
            wheel training slot upon booking.
          </li>
          <li>
            At minimum, client must make an effort to pay at least 50% of total
            cost of class prior to the 1st class
          </li>
          <li>
            If applicable, behind the wheel instruction is conducted by
            appointment only and the student may be charged regular school rate
            of $40.00 for any appointment he/she does not meet or misses, unless
            the school is given at least 24 hour notice. Student must make up
            missed classes (instruction/in-car) within 7 days.
          </li>
          <li>
            A refund of any fees or tuition will be provided, upon written
            request, unless the school is capable or willing to perform its part
            of the contract within a reasonable time period.
          </li>
          <li>
            No Certification will be issued until all fees have been paid in
            full.
          </li>
          <li>
            The school will complete the course in a reasonable length of time;
            however, it cannot be held responsible for delays caused by
            mechanical failure, unsafe driving conditions due to bad weather or
            any reason which it has no control. The school will give the student
            as much notice as possible of any delays.
          </li>
          <li>
            The instruction period does not guarantee that any student will pass
            the state license examination or secure a license, nor does the
            completed instruction guarantee employment of any kind.
          </li>
          <li>
            Abigail’s Driving School reserves the right to refer certain
            services to a third party if the school is unable to accommodate a
            customer.
          </li>
        </ol>
      </div>
      <div>
        <input type="text" name="signature" id="signature" required />
        <label htmlFor="signature">Signature</label>
      </div>
      <div>
        <input type="date" name="date" id="date" required />
        <label htmlFor="date">Date</label>
      </div>
    </div>
    <div className="section">
      <input
        style={{ marginRight: "10px" }}
        className="btn"
        type="submit"
        value="Submit Application"
      />
      <input className="btn" type="reset" value="Eraser" />
    </div>
    <div className="section">
      <small>
        DMV is committed to promoting transportation safety through the
        certification of quality driver training programs. If you have comments
        or concerns about this course, call our toll-free number: 1-877-885-5790
        or email dmvclu@dmv.virginia.com (2/2020)
      </small>
    </div>
  </form>
)

import React, { Component } from "react"
// import { Link } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"
import "./style.scss"

export default class IndexPage extends Component {
  render() {
    return (
      <div className="main">
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <div className="header">
          <div style={{ width: 150 }}>
            <Image />
          </div>
          <h2>Take your hotel to the digital (green) era.</h2>
          <div className="row">
            <div className="column">
              <h2>
                Riota helps hotels to save 35% of their in-room energy &amp;
                water expenditures
              </h2>
            </div>
            <div className="column">
              <h2>
                Riota helps hotels to increase revenue and increase direct
                bookings.
              </h2>
            </div>
          </div>
        </div>
        <div className="section">
          <h1>Contact</h1>

          <h2>We would love to get in touch. Let us know how to:</h2>
          <form>
            <div>
              <label>Name</label>
              <input />
            </div>
            <div>
              <label>Business Email</label>
              <input />
            </div>
          </form>
        </div>
        <div className="section">
          <h1>How it works</h1>
          <div className="imageBlock">{}</div>
          <h2>
            Riota Set up a network of sticker sensors on the hotel room that
            measures energy and water consumption in real time
          </h2>
        </div>
        <div className="section">
          <div className="imageBlock">{}</div>
          <h2>
            Guests are offered rewards when consuming less energy and water than
            average
          </h2>
          <h2>Bar/Restaurant vouchers</h2>
          <h2>Discounts for future stays when booked direct</h2>
        </div>
        <div className="section">
          <div className="imageBlock">{}</div>
          <h2>
            Guest redeem their prizes, enhancing their guest experience and
            generating upselling opportunities
          </h2>
        </div>
        <div className="section">
          <div className="imageBlock">{}</div>
          <h2>
            Riota manages the whole process to ensure a smooth experience from
            both the guest and the staff, being integrated with their routine
          </h2>
        </div>
      </div>
    )
  }
}

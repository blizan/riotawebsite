import React, { Component } from "react"
// import { Link } from "gatsby"
import SEO from "../components/seo"
import "./style.scss"
import logo from "../images/riota-logo.png"

import hotelRoom from "../images/bed-bedroom-furniture-271616.jpg"
import hotelBar from "../images/alcohol-bar-beer-941864.jpg"
import upsell from "../images/bar-beard-bokeh-853151.jpg"
import manage from "../images/agreement-business-businessmen-886465.jpg"

const adjectives = [
  { label: "DIGITAL", color: "#2a558a" },
  { label: "GREEN", color: "#6f8e2f" },
]

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adjectiveIndex: 0,
    }

    this.renderHeader = this.renderHeader.bind(this)
  }

  componentDidMount() {
    const SECONDS = 10
    setInterval(() => {
      this.setState({
        adjectiveIndex: (this.state.adjectiveIndex + 1) % adjectives.length,
      })
    }, SECONDS * 1000)
  }

  renderHeader() {
    const { adjectiveIndex } = this.state
    const { label, color } = adjectives[adjectiveIndex]

    return (
      <div className="header">
        <div className="innerColumn">
          <div className="nameRow">
            <img src={logo} className="logo" />
          </div>
          <h1>
            TAKE YOUR HOTEL TO
            <br />
            THE{" "}
            <span
              style={{
                color,
                display: "inline-block",
                textAlign: "center",
                fontWeight: "bold",
                width: 190,
              }}
            >
              {label}
            </span>{" "}
            ERA
          </h1>
          <div className="subheaders">
            <div className="subheader">
              <h2>
                Riota helps hotels to save 35% of their in-room energy &amp;
                water expenditures
              </h2>
            </div>
            <div className="subheader">
              <h2>
                Riota helps hotels to increase revenue and increase direct
                bookings.
              </h2>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderContact() {
    return (
      <div className="contact">
        <div className="innerColumn">
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
      </div>
    )
  }

  render() {
    return (
      <>
        <SEO title="Home" keywords={[`riota`]} />
        {this.renderHeader()}
        {this.renderContact()}

        <div className="sellPoints">
          <div className="innerColumn">
            <h1>How it works</h1>
            <div className="section">
              <div className="imageBlock">
                <img src={hotelRoom} />
              </div>
              <div className="sectionText">
                <h2>
                  Riota sets up a network of sticker sensors on the hotel room
                  that measures energy and water consumption in real time.
                </h2>
              </div>
            </div>
            <div className="section reverse">
              <div className="imageBlock">
                <img src={hotelBar} />
              </div>
              <div className="sectionText">
                <h2>
                  Guests are offered rewards when consuming less energy and
                  water than average.
                </h2>
                <ul>
                  <li>Bar/Restaurant vouchers</li>
                  <li>Discounts for future stays when booked direct</li>
                </ul>
              </div>
            </div>
            <div className="section">
              <div className="imageBlock">
                <img src={upsell} />
              </div>
              <div className="sectionText">
                <h2>
                  Guest redeem their prizes, enhancing their guest experience
                  and generating upselling opportunities
                </h2>
              </div>
            </div>
            <div className="section reverse">
              <div className="imageBlock">
                <img src={manage} />
              </div>
              <div className="sectionText">
                <h2>
                  Riota manages the whole process to ensure a smooth experience
                  from both the guest and the staff, being integrated with their
                  routine
                </h2>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

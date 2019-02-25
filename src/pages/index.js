import React, { Component } from "react"
// import { Link } from "gatsby"
import SEO from "../components/seo"
import "./style.scss"
import logo from "../images/riota-logo.png"

import hotelRoom from "../images/bed-bedroom-furniture-271616.jpg"

const adjectives = [
  { label: "digital", color: "#2a558a" },
  { label: "green", color: "#6f8e2f" },
]

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adjectiveIndex: 0,
    }
  }

  componentDidMount() {
    const SECONDS = 10
    setInterval(() => {
      this.setState({
        adjectiveIndex: (this.state.adjectiveIndex + 1) % adjectives.length,
      })
    }, SECONDS * 1000)
  }

  render() {
    const { adjectiveIndex } = this.state
    const { label, color } = adjectives[adjectiveIndex]

    return (
      <div className="main">
        <SEO title="Home" keywords={[`riota`]} />

        <div className="header">
          <div className="nameRow">
            <img src={logo} className="logo" />
          </div>
          <h1>
            Take your hotel to the{" "}
            <span
              style={{
                color,
                display: "inline-block",
                width: "95px",
                textAlign: "center",
              }}
            >
              {label}
            </span>{" "}
            era.
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
          <div className="imageBlock">
            <img src={hotelRoom} />
          </div>
          <h2>
            Riota sets up a network of sticker sensors on the hotel room that
            measures energy and water consumption in real time.
          </h2>
        </div>
        <div className="section">
          <div className="imageBlock">{}</div>
          <h2>
            Guests are offered rewards when consuming less energy and water than
            average.
          </h2>
          <ul>
            <li>Bar/Restaurant vouchers</li>
            <li>Discounts for future stays when booked direct</li>
          </ul>
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

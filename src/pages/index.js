import React, { Component } from "react"
import SEO from "../components/seo"
import addToMailchimp from "gatsby-plugin-mailchimp"
import "./style.scss"
import logo from "../images/riota-logo.png"
import hotelRoom from "../images/bed-bedroom-furniture-271616.jpg"
import hotelBar from "../images/alcohol-bar-beer-941864.jpg"
import upsell from "../images/bar-beard-bokeh-853151.jpg"
import manage from "../images/agreement-business-businessmen-886465.jpg"
import loader from "../images/loader.gif"

//font awesome stuff
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faWifi,
  faSmile,
  faDollarSign,
  faPiggyBank,
  faChartLine,
  faIceCream,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(faPiggyBank, faChartLine, faWifi, faDollarSign, faSmile, faIceCream)

const adjectives = [
  { label: "DIGITAL", color: "#2a558a" },
  { label: "GREEN", color: "#6f8e2f" },
]

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adjectiveIndex: 0,
      name: "",
      email: "",
      isLoading: false,
      errorMsg: null,
      successMsg: null,
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { name, email } = this.state
    console.log("--handleSubmit--", name, email)
    if (name.trim() === "") {
      this.setState({
        errorMsg: "Please enter a name",
      })
      return
    }

    this.setState({
      isLoading: true,
      errorMsg: null,
      successMsg: null,
    })

    const [firstName, lastName] = name.split(" ")
    console.log(firstName, lastName)

    try {
      const response = await addToMailchimp(email, {
        FNAME: firstName,
        LNAME: lastName || null,
      })
      console.log("--success--")
      console.log(response)
      if (response.result === "error") {
        const alreadySubscribed =
          response.msg.indexOf("is already subscribed") !== -1
        this.setState({
          isLoading: false,
          errorMsg: alreadySubscribed
            ? "You're already on our list."
            : response.msg,
        })
      } else {
        this.setState({
          isLoading: false,
          errorMsg: null,
          successMsg: "Thank you for contacting us!",
        })
      }
    } catch (e) {
      console.log("--there was an error--")
      console.log(e)
      this.setState({
        isLoading: false,
        errorMsg: e.errorMsg,
      })
    }
  }

  handleChangeName = event => {
    const name = event.target.value
    this.setState({
      name,
    })
  }

  handleChangeEmail = event => {
    const email = event.target.value
    this.setState({
      email,
    })
  }

  componentDidMount() {
    const SECONDS = 10
    setInterval(() => {
      this.setState({
        adjectiveIndex: (this.state.adjectiveIndex + 1) % adjectives.length,
      })
    }, SECONDS * 1000)
  }

  renderHeader = () => {
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
              <FontAwesomeIcon icon="piggy-bank" style={{ fontSize: 60 }} />
              <h2>
                Riota helps hotels to save 35% of their in-room energy &amp;
                water expenditures
              </h2>
            </div>

            <div className="subheader">
              <FontAwesomeIcon icon="chart-line" style={{ fontSize: 60 }} />
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
    const { isLoading, errorMsg, successMsg } = this.state

    return (
      <div className="contact">
        <div className="innerColumn contactInner">
          <div className="cta">
            <h1>Contact Us</h1>
          </div>
          <div className="formContainer" onSubmit={this.handleSubmit}>
            <p>We would love to get in touch. Let us know how to:</p>
            <form>
              <input
                type="text"
                placeholder="Name"
                onChange={this.handleChangeName}
                disabled={isLoading}
              />
              <input
                type="text"
                placeholder="Business Email"
                onChange={this.handleChangeEmail}
                disabled={isLoading}
              />
              {errorMsg !== null && <p className="errorMsg">{errorMsg}</p>}
              {successMsg !== null && (
                <p className="successMsg">{successMsg}</p>
              )}

              <button type="submit" value="Submit" disabled={isLoading}>
                {isLoading ? <img src={loader} alt="loader" /> : "Submit"}
              </button>
            </form>
          </div>
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
              <div
                className="imageBlock"
                style={{ backgroundImage: `url(${hotelRoom})` }}
              >
                <FontAwesomeIcon
                  icon="wifi"
                  style={{ fontSize: 120 }}
                  color="white"
                />
              </div>
              <div className="sectionText">
                <h2>
                  Riota sets up a network of sticker sensors on the hotel room
                  that measures energy and water consumption in real time.
                </h2>
              </div>
            </div>
            <div class="divider" />
            <div className="section reverse">
              <div
                className="imageBlock"
                style={{ backgroundImage: `url(${hotelBar})` }}
              >
                <FontAwesomeIcon
                  icon="dollar-sign"
                  style={{ fontSize: 120 }}
                  color="white"
                />
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
            <div class="divider" />
            <div className="section">
              <div
                className="imageBlock"
                style={{ backgroundImage: `url(${upsell})` }}
              >
                <FontAwesomeIcon
                  icon="smile"
                  style={{ fontSize: 120 }}
                  color="white"
                />
              </div>
              <div className="sectionText">
                <h2>
                  Guest redeem their prizes, enhancing their guest experience
                  and generating upselling opportunities
                </h2>
              </div>
            </div>
            <div class="divider" />
            <div className="section reverse">
              <div
                className="imageBlock"
                style={{ backgroundImage: `url(${manage})` }}
              >
                <FontAwesomeIcon
                  icon="ice-cream"
                  style={{ fontSize: 120 }}
                  color="white"
                />
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

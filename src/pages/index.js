import React from "react"
// import { Link } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"
import "./style.scss"

const IndexPage = () => (
  <div className="main">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </div>
)

export default IndexPage

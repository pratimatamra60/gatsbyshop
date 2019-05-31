import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Contact US"
      styleClass="about-background"
    />
    <section>
      <div className="container">
        <div className="mt-5 mb-5 row">
          <div className="col-10 col-sm-8 col-md-6 mx-auto">
            <form
              action="https://formspree.io/pratimatamra60@gmail.com"
              method="POST"
            >
              {/*name */}
              <div className="form-group">
                <label htmlfor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="john simm"
                />
              </div>
              {/*email */}
              <div className="form-group">
                <label htmlfor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="john@email.com"
                />
              </div>
              {/*description */}
              <div className="form-group">
                <label htmlfor="description">Description</label>
                <textarea
                  type="text"
                  className="form-control"
                  name="description"
                  id="description"
                  rows="5"
                  placeholder="..."
                />
              </div>
              {/*submit */}
              <button
                type="submit"
                className="btn btn-yellow btn-block text-capitalize mt-5"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default ContactPage

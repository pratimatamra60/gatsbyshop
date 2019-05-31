import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SINGLE_IMAGE = graphql`
  {
    img1: file(relativePath: { eq: "homeGallery/img-1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    img2: file(relativePath: { eq: "homeGallery/img-2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    img3: file(relativePath: { eq: "homeGallery/img-3.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default function Gallery() {
  return (
    <StaticQuery
      query={SINGLE_IMAGE}
      render={data => {
        const img1 = data.img1.childImageSharp.fluid
        const img2 = data.img2.childImageSharp.fluid
        const img3 = data.img3.childImageSharp.fluid
        return (
          <section className="py-5">
            <div className="container">
              <div className="gallerywrapper">
                <div className="item item-1">
                  <Img fluid={img1} />
                  <p className="info">pork momo</p>
                </div>

                <div className="item item-2">
                  <Img fluid={img2} />
                  <p className="info">chicken momo</p>
                </div>

                <div className="item item-3">
                  <Img fluid={img3} />
                  <p className="info">veg momo</p>
                </div>
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}

import React from "react"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"

export default function BackgroundSection({
  img,
  styleClass,
  title,
  subtitle,
  children,
}) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      <h2>{subtitle}</h2>
      <div>
        <Link to="/about/">
          <button className="btn text-uppercase btn-yellow">{}</button>
        </Link>
      </div>

      {children}
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}

import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section>
      <div className="py-5">
        <div className="container">
          <Title title="our Strory" />
          <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
              <p className="lead text-muted mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti nisi iste illo magnam harum itaque aperiam, nobis
                facere modi aut excepturi est. Commodi distinctio atque ipsam
                debitis sint, corporis.
              </p>
              <Link to="/about/">
                <button className="btn text-uppercase btn-yellow">
                  About Page
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

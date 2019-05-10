import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section>
      <div class="py-5">
        <div class="container">
          <Title title="our Strory" />
          <div class="row">
            <div class="col-10 col-sm-8 mx-auto text-center">
              <p class="lead text-muted mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti nisi iste illo magnam harum itaque aperiam, nobis
                facere modi aut excepturi est. Commodi distinctio atque ipsam
                debitis sint, corporis.
              </p>
              <Link to="/about/">
                <button class="btn text-uppercase btn-yellow">
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

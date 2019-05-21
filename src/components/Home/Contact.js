import React from "react"
import Title from "../Globals/Title"

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="row">
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
    </section>
  )
}

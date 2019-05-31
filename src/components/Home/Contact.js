import React from "react"
import Title from "../Globals/Title"

export default function Contact() {
  return (
    <section className="contact py-5">
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="card">
              <h6>Address</h6>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.105624725611!2d13.413144515656303!3d52.54961427981979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85200ffffffff%3A0xa5239c459b2d413f!2sSch%C3%B6nhauser+Allee+Arcaden!5e0!3m2!1sen!2sde!4v1558875654995!5m2!1sen!2sde" />
            </div>
          </div>

          <div className="column">
            <div className="card">
              <h6>Opening hours</h6>
              <p>Monday-Friday</p>
              <p>Some text</p>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <h6>Contact</h6>
              <p>info@abc.com</p>
              <p>Tel: more info</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

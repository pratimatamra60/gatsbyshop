import React from "react"

export default function Footer() {
  return (
    <footer className="footer py-3">
      <div class="container">
        <div class="row">
          <div class="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
            <h3>
              all right reserved &copy;{new Date().getFullYear().toString()}
            </h3>
          </div>
        </div>
      </div>
    </footer>
  )
}

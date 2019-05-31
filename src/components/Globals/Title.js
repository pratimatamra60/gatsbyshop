import React from "react"

export default function Title({ title, message }) {
  return (
    <div className="row">
      <div className="col text-center mb-3">
        <h2 className="text-yellow display-5 text-capitalize font-weight-bold">
          {message}
        </h2>
        <h1 className="display-4 text-capitalize font-weight-bold">{title}</h1>
      </div>
    </div>
  )
}

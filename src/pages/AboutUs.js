import React from "react";

export default function AboutUs({
  title,
}) {
  return (
    <div className="page">
      <h1>Hello, welcome to {title}</h1>
      <div className="btn btn-primary">
        <button className="btn btn-primary" id="submit" type="submit">SUBMIT</button>
      </div>
    </div>

  )
}


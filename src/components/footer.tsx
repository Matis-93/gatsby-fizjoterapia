import React from "react"
import { Row } from "react-bootstrap"

const Footer = () => (
  <footer>
    <Row className="w-100">
      <div
        className="col-md-6 text-muted text-center"
        style={{ fontSize: "0.8rem" }}
      >
        Stworzona przez:&ensp;Stalmach Mateusz
      </div>
      <div
        className="col-md-6 text-muted text-center"
        style={{ fontSize: "0.8rem" }}
      >
        Telefon kontaktowy do twórcy:&ensp;669157750
      </div>
    </Row>
  </footer>
)

export default Footer

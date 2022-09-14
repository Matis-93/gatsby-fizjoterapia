import { MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit"
import React from "react"
import { Card } from "react-bootstrap"
import "./CanIHelpUCard.css"
// const { MDBListGroup, MDBListGroupItem } = require("mdb-react-ui-kit");

type Props = {
  title: string
  points: string[]
}

const CanIHelpUCard = ({ title, points }: Props) => (
  <Card className="CanIHelpUCard">
    <Card.Header as="h5" className="d-flex justify-content-center">
      {title}
    </Card.Header>
    <Card.Body>
      <MDBListGroup className="list-group-flush">
        {points.map((text, index) => (
          <MDBListGroupItem key={title + "_" + index}>
            {text != "SM" ? text.toLowerCase() : text}
          </MDBListGroupItem>
        ))}
      </MDBListGroup>
    </Card.Body>
  </Card>
)

export default CanIHelpUCard

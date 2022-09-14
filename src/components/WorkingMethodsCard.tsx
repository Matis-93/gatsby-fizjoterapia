import React from "react"
import Card from "react-bootstrap/Card"
import "./WorkingMethodsCard.css"

type Props = {
  img: string
  title: string
  desc?: string
}

const WorkingMethodsCard = ({ img, title, desc }: Props) => (
  <Card className="Card">
    <Card.Img variant="top" src={img} alt={title} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      {desc && <Card.Text>{desc}</Card.Text>}
    </Card.Body>
  </Card>
)
export default WorkingMethodsCard

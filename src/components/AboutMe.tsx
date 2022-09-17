import React, { RefObject } from "react"
import { Card, Col, Row } from "react-bootstrap"
import img from "../images/profilowe.jpg"
import "./AboutMe.css"
import config from "../config.json"

const AboutMe = ({ refer }: { refer: RefObject<HTMLDivElement> }) => (
  <Card className="bg-dark text-white AboutMe" ref={refer}>
    <Row
      lg={{ cols: 2 }}
      md={{ cols: 2 }}
      sm={{ cols: 2 }}
      className="AboutMeRow"
    >
      <Col
        className="ImgCol align-self-center"
        lg={{ span: 4 }}
        md={{ span: 4 }}
        sm={{ span: 4 }}
      >
        <Card.Img src={img} alt="Zdjęcie profilowe" />
      </Col>
      <Col
        lg={{ span: 8 }}
        md={{ span: 8 }}
        sm={{ span: 8 }}
        className="align-self-center"
      >
        <Card.Body className="d-flex row p-6">
          <Card.Title
            as="h2"
            className="fw-normal AdviceCardHeader card-header me-auto"
          >
            {config.o_mnie.naglowek}
          </Card.Title>
          <div className="">
            <Card.Text as="h4" className="lead">
              {config.o_mnie.opis1}
            </Card.Text>
            <Card.Text as="h4" className="lead">
              {config.o_mnie.opis2}
            </Card.Text>
          </div>
        </Card.Body>
      </Col>
    </Row>
  </Card>
)

export default AboutMe

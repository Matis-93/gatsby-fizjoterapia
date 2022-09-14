import React, { RefObject } from "react"
import { Card, Col, Row } from "react-bootstrap"
import img from "../images/profilowe.jpg"
import "./AboutMe.css"

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
        className="align-self-center h-100"
      >
        <Card.Body className="d-flex row p-6">
          <Card.Title
            as="h2"
            className="fw-normal AdviceCardHeader card-header me-auto"
          >
            Nazywam się Katarzyna Krej i od kilku lat pracuję jako
            fizjoterapeuta.
          </Card.Title>
          <div className="">
            <Card.Text as="h4" className="lead">
              Już w trakcie studiów pracowałam w zawodzie - tak, aby jak
              najwcześniej zdobywać doświadczenie. Studia magisterskie z
              Fizjoterapii na Akademii Wychowania Fizycznego w Katowicach
              ukończyłam w 2019 roku. Na tym jednak nie poprzestalam. Stale
              rozwijam się na specjalistycznych kursach, by jeszcze lepiej
              zrozumieć problemy, z jakimi zgłaszają się do mnie Pacjenci. Swoją
              działalność specjalizuję w dziedzinie/zakresie osteopatii, którą
              studiuję na warszawskiej Still Academy of Osteopathy.
            </Card.Text>
            <Card.Text as="h4" className="lead">
              Prywatnie jestem miłośniczką dobrego kryminału, zwierząt i
              wycieczek górskich.
            </Card.Text>
          </div>
        </Card.Body>
      </Col>
    </Row>
  </Card>
)

export default AboutMe

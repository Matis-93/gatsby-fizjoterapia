import React, { RefObject } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Title from "./Title";
import "./Contact.css";

const Contact = ({ refer }: { refer: RefObject<HTMLDivElement> }) => {
  return (
    <>
      <Title refer={refer}>Kontakt</Title>
      <Row className="featurette ContactContainer">
        <Col sm="12" md="7" className="align-self-center h-100 ContactSection">
          <div className="ContactLine">
            <div className="IconStyle">
              <i className="bi bi-house-fill h1"></i>
            </div>
            <div>
              <h3 className="fw-normal text-start">Wodzisławska 37</h3>
              <h3 className="fw-normal text-start">43-245 Studzionka</h3>
            </div>
          </div>
          <a
            href={`tel:792662270`}
            className="ContactLine text-body text-decoration-none"
          >
            <div className="IconStyle">
              <i className="bi bi-telephone-fill h1"></i>
            </div>
            <div className="align-self-center">
              <h3 className="fw-normal text-start">792 662 270</h3>
            </div>
          </a>
          <a
            href={`mailto:katarzynanogawica@gmail.com`}
            className="ContactLine text-body text-decoration-none"
          >
            <div className="IconStyle">
              <i className="bi bi-envelope-fill h1"></i>
            </div>
            <div className="align-self-center">
              <h3 className="fw-normal text-start">
                katarzynanogawica@gmail.com
              </h3>
            </div>
          </a>
        </Col>
        <Col md="5">
          <Card.Body className="h-100">
            <iframe
              className="w-100 h-100 Iframe"
              title="Contact map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.596803030371!2d18.768108700000003!3d49.9626655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ae0a8a5a7fe9%3A0x14796a23364ccbbe!2sWodzis%C5%82awska%2037%2C%2043-245%20Studzionka!5e0!3m2!1spl!2spl!4v1659880026119!5m2!1spl!2spl"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Card.Body>
        </Col>
      </Row>
    </>
  );
};

export default Contact;

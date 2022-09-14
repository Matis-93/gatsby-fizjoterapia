import React from "react";
import { Card } from "react-bootstrap";
import "./AdviceCard.css";

type Props = {
  title: string;
  description: string;
  isReordered?: boolean;
  img: string;
};

const AdviceCard = ({ title, description, isReordered, img }: Props) => (
  <div className="row featurette AdviceContainer">
    <div className={"col-md-7 AdviceCard" + (isReordered ? " order-md-2" : "")}>
      <Card.Header
        as="h1"
        className="fw-normal d-flex justify-content-center AdviceCardHeader"
      >
        {title}
      </Card.Header>
      <Card.Text
        className={"text-justify lead" + (isReordered ? " order-md-1" : "")}
      >
        {description}
      </Card.Text>
    </div>
    <div className="col-md-5 align-self-center AdviceImage">
      <Card.Img variant="top" src={img} />
    </div>
  </div>
);

export default AdviceCard;

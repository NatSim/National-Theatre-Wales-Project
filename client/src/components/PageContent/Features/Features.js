import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Features.css";

const Features = (props) => {
  return (
    <>
      <br />
      <Card className="feature-card">
        <Card.Img className="img-control" variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" href={props.links}>
            {props.button}
          </Button>
        </Card.Body>
      </Card>
      <br />
    </>
  );
};

export default Features;

import React from "react";
import { useHistory } from "react-router";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Features.css";

const Features = (props) => {
  const history = useHistory();
  //On Button click redirects user to home page

  const navigateToAboutPages = () => {
    history.push(props.links);
  };

  return (
    <>
      <br />
      <Card className="feature-card">
        <Card.Img className="img-control" variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button variant="primary" onClick={navigateToAboutPages}>
            {props.button}
          </Button>
        </Card.Body>
      </Card>
      <br />
    </>
  );
};

export default Features;

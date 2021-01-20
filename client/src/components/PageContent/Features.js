import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./Features.css";

const Features = (props) => {
  {
    return (
      <Card className="feature-card">
        <Card.Img className="img-control" variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
    /* <div className="parent-container">
        <img
          className="image-control"
          src={props.image}
          alt="meditating feature"
        />
      </div>
      <div className="parent-container">
        <img className="image-control" src={props.image2} alt="music feature" />
      </div>
      <div className="parent-container">
        <img
          className="image-control"
          src={props.image3}
          alt="walking feature"
        />
      </div>
      <div className="parent-container">
        <img className="image-control" src={props.image4} alt="feature" />
      </div>
    </Carousel>
  );
}; */
  }
};

export default Features;

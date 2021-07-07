import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Menu = ({ items }) => {
  return (
    // <div className="section-center">
    <div className="container">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <Card className="card-container" key={id}>
            <Card.Img className="card-img" variant="top" src={img} />
            <Card.Body>
              <Card.Title className="card-title">{title}</Card.Title>
              <Card.Text className="card-text">{desc}</Card.Text>
            </Card.Body>
            <Card.Footer className="card-div">
              <Button className="card-button" block>
                ${price}
              </Button>
            </Card.Footer>
          </Card>
        );
      })}
    </div>
  );
};

export default Menu;

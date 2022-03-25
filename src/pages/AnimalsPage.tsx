import React, { VoidFunctionComponent } from "react";
import { IAnimal } from "../models/IAnimal";
import { Link } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

interface IAnimalPageProps {
  animals: IAnimal[];
}

export const AnimalsPage: VoidFunctionComponent<IAnimalPageProps> = (props) => {
  const { animals } = props;
  return (
    <Container>
      {animals.length === 0 ? (
        <div>LOADING ANIMALS</div>
      ) : (
        <Row>
          {animals.map((animal: IAnimal) => {
            return (
              <Col
                key={animal.id}
                xs={{ span: 10, offset: 1 }}
                md={{ span: 8, offset: 2 }}
              >
                <Card border="dark" className="text-center">
                  <Card.Img
                    style={{ width: "500px", margin: "0 auto" }}
                    variant="top"
                    src={animal.imageUrl}
                  />
                  <Card.Body>
                    <Card.Title>{animal.name}</Card.Title>
                    <Card.Text>{animal.shortDescription}</Card.Text>
                    <Link to={`/animal/${animal.id}`}>
                      <Button variant="success">
                        Läs mer om {animal.name}
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </Container>
  );
};

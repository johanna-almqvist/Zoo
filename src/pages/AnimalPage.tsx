import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

interface IAnimalPageProps {
  animals: IAnimal[];
  fedAnimal: (id: number) => void;
}

export function AnimalPage(props: IAnimalPageProps) {
  const { id } = useParams();
  const { animals, fedAnimal } = props;
  const [animal, setAnimal] = useState<IAnimal>();

  useEffect(() => {
    const a = animals.find((animal) => animal.id === Number.parseInt(id + ""));
    setAnimal(a);
  }, [animals, id]);

  return !animal ? (
    <div>Loading</div>
  ) : (
    <Container>
      <Row>
        <img src={animal.imageUrl} alt="" />
      </Row>
      <Row>
        <h2>{animal.name}</h2>
      </Row>
      <p>Latinskt namn: {animal.latinName}</p>
      <p>Jag är född: {animal.yearOfBirth}</p>
      <Row>
        {animal.isFed && (
          <Col>Jag är matad den: {animal.lastFed.toLocaleString()}</Col>
        )}
        <Col>
          <button
            disabled={animal.isFed}
            onClick={() => {
              fedAnimal(animal.id);
            }}
          >
            Mata Djur
          </button>
        </Col>
      </Row>

      <p>{animal.longDescription}</p>
    </Container>
  );
}

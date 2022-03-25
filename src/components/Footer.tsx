import { Col, Container, Row } from "react-bootstrap";

export function Footer() {
  const myStyle = {
    color: "white",
    backgroundColor: "green",
    padding: "10px",
    fontFamily: "Sans-Serif",
  };
  return (
    <Container fluid style={myStyle} className="text-center">
      <Row>
        <Col>Telefon</Col>
        <Col>Mail</Col>
        <Col>Adress</Col>
      </Row>
    </Container>
  );
}

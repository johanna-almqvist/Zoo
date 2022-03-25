import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Header() {
  const myStyle = {
    color: "white",
    backgroundColor: "green",
    padding: "10px",
    fontFamily: "Sans-Serif",
  };
  return (
    <>
      <Navbar style={myStyle}>
        <Container>
          <Navbar>ZOO</Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav>
            <Nav>
              <Link to="/">
                <Button variant="light" size="lg">
                  Startsida
                </Button>
              </Link>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

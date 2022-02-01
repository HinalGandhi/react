import "./App.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Sample App</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to="/Home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Feature">
              <Nav.Link>Features</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/About">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Contact">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;

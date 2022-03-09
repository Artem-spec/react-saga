import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { DirectotyRouteList } from "../../route/directoty.route";

export const Menu = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">StarWars</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">          
          <NavDropdown title="Справочники" id="basic-nav-dropdown">
            <NavDropdown.Item href={DirectotyRouteList.DirectoryPeople}>Персонажи</NavDropdown.Item>
            <NavDropdown.Item href={DirectotyRouteList.DirectoryPlanets}>Планеты</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};
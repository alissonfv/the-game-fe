import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'react-bootstrap';
import '../index.css';
import { logout } from '../utils/auth';

export default function Header() {
    return (
      <Container className="header">
      <Navbar color="light" light expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavbarBrand href="/question">Questão</NavbarBrand>
          </NavItem>
          <NavItem>
            <NavbarBrand href="/ranking">Ranking</NavbarBrand>
          </NavItem>
        </Nav>
        <div className="space" />
        <Nav>
          <NavLink onClick={() => logout()} >Logout</NavLink>
        </Nav>
      </Navbar>
    </Container>
    );
}
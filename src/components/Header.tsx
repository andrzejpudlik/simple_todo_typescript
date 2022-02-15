import { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header: FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link>Todo List</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
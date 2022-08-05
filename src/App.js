import './App.css';
import { Container, Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='#main'>CatShop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#main'>Main</Nav.Link>
            <Nav.Link href='#food'>Food</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;

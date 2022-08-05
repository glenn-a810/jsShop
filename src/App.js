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

      <div className='main-bg'></div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src='https://i.ibb.co/j3jNkXn/food1.jpg' alt='food1' width='80%' />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className='col-md-4'>
            <img src='https://i.ibb.co/cNF60z6/food2.jpg' alt='food2' width='80%' />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className='col-md-4'>
            <img src='https://i.ibb.co/SBCSGrZ/food3.jpg' alt='food3' width='80%'/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

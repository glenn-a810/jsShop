import './App.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import data from "./data";
import Item from "./Item";

function App() {
  const [food, setFood] = useState(data)

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
          { food.map((parm,i)=>{
            return (
                <Item food={food[i]} />
                // <div className='col-md-4'>
                //   <img src={food[i].img} width='80%'/>
                //   <h4>{food[i].title}</h4>
                //   <p>{food[i].content}</p>
                //   <p>{food[i].price}원</p>
                // </div>
            )
          }) }
        </div>
      </div>
    </div>
  );
}

export default App;

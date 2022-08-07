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
                <div className='col-md-4'>
                  <img src={food[i].img} width='80%'/>
                  <h4>{food[i].title}</h4>
                  <p>{food[i].content}</p>
                  <p>{food[i].price}원</p>
                </div>
            )
          }) }
          {/*<div className='col-md-4'>*/}
          {/*  <img src={ food[0].img } alt='food1' width='80%'/>*/}
          {/*  <h4>{ food[0].title }</h4>*/}
          {/*  <p>{ food[0].content }</p>*/}
          {/*  <p>{ food[0].price }원</p>*/}
          {/*</div>*/}
          {/*<Item food={food}/>*/}
          {/*<div className='col-md-4'>*/}
          {/*  <img src='https://i.ibb.co/cNF60z6/food2.jpg' alt='food2' width='80%' />*/}
          {/*  <h4>상품명</h4>*/}
          {/*  <p>상품설명</p>*/}
          {/*</div>*/}
          {/*<div className='col-md-4'>*/}
          {/*  <img src='https://i.ibb.co/SBCSGrZ/food3.jpg' alt='food3' width='80%'/>*/}
          {/*  <h4>상품명</h4>*/}
          {/*  <p>상품설명</p>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
}

export default App;

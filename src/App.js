import './App.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import data from "./data";
import Item from "./Item";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const [food, setFood] = useState(data)

  return (
    <div className="App">
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='#main'>CatShop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Main</Nav.Link>
            <Nav.Link href='/food'>Food</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/*<Link to='/'>Main</Link>*/}
      {/*<Link to='/food'>Food</Link>*/}

      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg'></div>
            <div className='container'>
              <div className='row'>
                { food.map((parm,i)=>{
                  return (
                      <Item food={food[i]} />
                  )
                }) }
              </div>
            </div>
          </>
        } />
        <Route path='/food' element={
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
              </div>
              <div className="col-md-6">
                <h4 className="pt-5">상품명</h4>
                <p>상품설명</p>
                <p>120000원</p>
                <button className="btn btn-danger">주문하기</button>
              </div>
            </div>
          </div>
        } />
      </Routes>

    </div>
  );
}

export default App;

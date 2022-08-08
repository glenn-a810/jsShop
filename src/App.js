import './App.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import data from "./data";
import Item from "./Item";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Detail from "./Detail";

function App() {
  const [food, setFood] = useState(data)
  const navigate = useNavigate()

  return (
    <div className="App">
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='#main'>CatShop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link onClick={()=>{
              navigate('/')
            }}>Main</Nav.Link>
            <Nav.Link onClick={()=>{
              navigate('/food')
            }}>Food</Nav.Link>
            <Nav.Link onClick={()=>{
              navigate('/about')
            }}>About</Nav.Link>
            <Nav.Link onClick={()=>{
              navigate('/event')
            }} >Event</Nav.Link>
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
        <Route path='/food' element={ <Detail food={food} /> } />
        <Route path='/food/:id' element={ <Detail food={food} /> } />
        <Route path='*' element={<div>404 not found</div>} />
        <Route path='about' element={ <About /> } >
          <Route path='member' element={ <div>Member</div> } />
          <Route path='location' element={ <div>Location</div> } />
        </Route>
        <Route path='event' element={ <Event /> } >
          <Route path='one' element={ <div>One</div> } />
          <Route path='two' element={ <div>Two</div> } />
        </Route>
      </Routes>

    </div>
  );
}

function About() {
      return (
          <div>
            <h4>About Page</h4>
            <Outlet />
          </div>
      )
}

function Event() {
  return (
      <div>
        <h4>오늘의 이벤트</h4>
        <Outlet />
      </div>
  )
}

export default App;

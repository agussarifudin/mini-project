import React, { Component ,Fragment} from 'react';
import { Link } from 'react-router-dom';
import { Navbar,Nav,NavDropdown, Container, } from 'react-bootstrap';
import logo from '../../Asset/Images/dbo.png'
import './navbar.css'

const navbar = ()=>{
    return (

      <Fragment>
        <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src={logo} className='logo'/>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/home'>
            HOME
          </Link>
          <Link className='nav-link' to='/login'>
            LOGIN
          </Link>
          <Link className='nav-link' to='/cart'>
            <i class="fas fa-cart-plus"></i>
            <span className='jumlah'>0</span>
          </Link>
          <Link className='nav-link' to='/checkout'>
            CHECKOUT
          </Link>
         
        </div>
        </div>
      </Fragment>







    







      // <div className='mb-2'>
      // <Navbar  variant="dark">
      //   <Container>
      //     <Navbar.Brand>DBO</Navbar.Brand>
      //     <Nav>
      //       <Nav.Link href='/home'>HOME</Nav.Link>
      //       <Nav.Link>Cart</Nav.Link>
      //      <Nav.Link href='/productdetail'>Detail</Nav.Link>
      //     </Nav>
      //     </Container>
      // </Navbar>
      // </div>
    )
  }


  export default navbar;
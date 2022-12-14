import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AOS from "aos";
import Login from '../assets/img/loginicon.svg'
import Cart from '../assets/img/iconmonstr-shopping-bag-4.svg'
import Search from '../assets/img/searchicon.svg'
import Logoimg from '../assets/img/daydreamlogo.png'
import Signup from './signup'
import Bag from '../components/Bag'
import "aos/dist/aos.css";
import auth from '../utils/auth'

AOS.init();

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("all");
  const [scrolled, setScrolled] = useState(false);
  // console.log(auth.loggedIn());
  // const Header = document.querySelector("header")
  // let lastScrollY = window.scrollY;

  // window.addEventListener("scroll", () => {
  //   if (lastScrollY < window.scrollY) {
  //     Header.classList.add("nav--hidden");
  //   } else {
  //     Header.classList.remove("nav--hidden");
  //   }

  //   lastScrollY = window.scrollY;
  // });
  console.log(auth.loggedIn());

  const handleSearch = (e) => console.log(e.target);



  return (
    <header>
      <div className="top-banner">
        {auth.loggedIn() 
        ? <h4>Hello, start shopping!</h4>
        : <h4>Please log in!</h4>
        }
        <h1 className="discount-title">FREE SHIPPING</h1>
        <a href="#" className="discount-top-banner">ON ORDERS $19+</a>
      </div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className="logo"><img src={Logoimg} className="logo-img" alt="logo"></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll" className="nav-collapse">

            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

            </Nav>
            {/* <div className="form-social-container"> */}
            <div className="nav-filter-link">
              <a href='/' className="gender-bold">MEN</a>
              <a href='/' className="gender-bold">WOMEN</a>
              <a href='/' className="gender-bold">SHOES</a>
              <a href='/' className="gender-bold">ACCESSORIES</a>
              <a href='/' className="gender-bold">SALE</a>
            </div>
            <div className="search-form-container">
              <Form onSubmit={handleSearch} className="d-flex ">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 search-form"
                  aria-label="Search"
                />
                {/* <div className="search-icon-container">
                  <img src={Search} className="search-icon"></img>
                </div> */}

                <Button type="submit" variant="outline-success" className="search-btn">Search</Button>
              </Form>
            </div>

            {/* </div> */}
          </Navbar.Collapse>
          <div className="nav-login-out">
            <Bag />
            
            <Signup />

          </div>
        </Container>
      </Navbar>
    </header >
  );
};
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function NavBar() {
  const CartState = useSelector((state) => state.Cart);
  const [Count, setCount] = useState(0);
  useEffect(() => {
    setCount(CartState.cartItems.length)
  }, [CartState.cartItems.length])
  
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        className="shadow-lg mb-5 sticky-top navigation"
      >
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <h4>Pizza World</h4>
            </Link>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Link
              to="/register"
              className="active"
              style={{
                textDecoration: "none",
                color: "white",
                paddingRight: "16px",
              }}
            >
             Register
            </Link>
            <Nav className="text-light">
              <Link
                to="/cart"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <div id="cart" count={Count}>
                  Cart 
                </div>
              </Link>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

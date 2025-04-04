import React, { useEffect, useState } from "react";
import { Container, FormControl, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/Image/logo.png";
import login from "../../assets/Image/login.png";
import cart from "../../assets/Image/cart.png";
import NavbarSearchHhook from "../../hook/search/navbar-search-hook";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { getLoggerUser } from "../../redux/actions/authAction";
import GetAllUserCartHook from "../../hook/cart/get-all-user-cart-hook";
export const NavBarLogin = () => {
  const [onChangeSearch, searchWord] = NavbarSearchHhook();
  // kathafed 3la resulta (word + data) de search wakha nreload lpage
  const dispatch = useDispatch();
  let word = "";
  if (localStorage.getItem("searchWord") != null)
    word = localStorage.getItem("searchWord");

  const [user, setUser] = useState("");
  let usert = "";
  // pour 2em methode
  // const res = useSelector((state) => state.authReducer.currentUser)

  useEffect(() => {
    // methode 1 => par localStorage
    if (localStorage.getItem("user") !== null)
      // json to js
      usert = JSON.parse(localStorage.getItem("user"));
    setUser(usert);

    // matho 2 :> par request ("/api/v1/users/getMe")
    // dispatch(getLoggerUser());
  }, []);

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
  };
  //
  const [itemsNum] = GetAllUserCartHook();

  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img src={logo} className="logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            value={word}
            onChange={onChangeSearch}
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
            {user != "" ? (
              <NavDropdown title={user.name} id="basic-nav-dropdown">
                {user.role === "admin" ? (
                  <NavDropdown.Item href="/admin/allproducts">
                    لوحة التحكم
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item href="/user/profile">
                    الصفحه الشخصية
                  </NavDropdown.Item>
                )}
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logOut} href="/">
                  تسجيل الخروج
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link
                href="/login"
                className="nav-text d-flex mt-3 justify-content-center"
              >
                <img src={login} className="login-img" alt="sfvs" />
                <p style={{ color: "white" }}>دخول</p>
              </Nav.Link>
            )}

            <Nav.Link
              href="/cart"
              className="nav-text position-relative d-flex mt-3 justify-content-center"
              style={{ color: "white" }}
            >
              <img src={cart} className="login-img" alt="sfvs" />
              <p style={{ color: "white" }}>العربه</p>
              <span class="position-absolute top-10 start-0 translate-middle badge rounded-pill bg-danger">
                {itemsNum || 0}
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

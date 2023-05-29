import { Container, Nav, Navbar } from 'react-bootstrap';
import style from './navbar.module.css'
import { NavigationLink } from '../NavLink/NavLink';
import { API_ENUM } from 'common/common';

export const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" sticky="top" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href={API_ENUM.SHOP} className={'navbar-brand'.concat(` ${style.navbarBrand}`)}>
              FAST SHOP
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse>
            <Nav className="me-auto">
              <NavigationLink link={API_ENUM.SHOP}>SHOP</NavigationLink>
              <NavigationLink link={API_ENUM.CART}>CART</NavigationLink>
              <NavigationLink link={API_ENUM.COUPONS}>COUPONS</NavigationLink>
              <NavigationLink link={API_ENUM.HISTORY}>HISTORY</NavigationLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

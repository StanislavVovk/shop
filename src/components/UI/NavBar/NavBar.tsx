import type { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import style from './navbar.module.css'
import { NavigationLink } from '../NavLink/NavLink';
import { API_ENUM } from '../../../common/common';

export const NavBar: FC = () => {
  // todo create link mapper
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

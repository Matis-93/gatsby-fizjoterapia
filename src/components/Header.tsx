import { Nav, Navbar } from "react-bootstrap"
import RefsObj from "./RefsObject"
import "./Header.css"
import React from "react"
import logo from "../images/logo_male.png"

const Header = ({ refs }: { refs: RefsObj }) => {
  const handleScroll = (ref: HTMLDivElement | null) => {
    window.scrollTo({
      top: ref?.offsetTop && ref?.offsetTop - 70,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <header>
      <Navbar
        bg="dark"
        variant="dark"
        className="fixed-top"
        collapseOnSelect
        expand="md"
      >
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="Button"
        />
        <Navbar.Brand className="p-0 m-0">
          <a href="/#">
            <img src={logo} alt="logo" className="SmallLogo" />
          </a>
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav" className="ps-3">
          <Nav className="me-auto">
            <Nav.Link
              onClick={e => handleScroll(refs.workingMethods.current)}
              href="#metody"
            >
              Metody
            </Nav.Link>
            <Nav.Link
              href="#w_czym_moge_pomoc"
              onClick={e => handleScroll(refs.canIHelpU.current)}
            >
              W czym mogę pomóc?
            </Nav.Link>
            <Nav.Link
              href="#przygotuj_sie"
              onClick={e => handleScroll(refs.visitAdvice.current)}
            >
              Przygotuj się
            </Nav.Link>
            <Nav.Link
              href="#o_mnie"
              onClick={e => handleScroll(refs.aboutMe.current)}
            >
              O mnie
            </Nav.Link>
            <Nav.Link
              href="#kontakt"
              onClick={e => handleScroll(refs.contact.current)}
            >
              Kontakt
            </Nav.Link>
            <Nav.Link
              href="#facebook"
              onClick={e => handleScroll(refs.facebook.current)}
            >
              Facebook
            </Nav.Link>
            <Nav.Link
              href="#cennik"
              onClick={e => handleScroll(refs.price.current)}
            >
              Cennik
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header

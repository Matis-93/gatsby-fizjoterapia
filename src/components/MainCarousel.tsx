import React from "react"
import Carousel from "react-bootstrap/Carousel"
import first from "../images/tlo1.jpg"
import second from "../images/tlo2.jpg"
import third from "../images/tlo3.jpg"
import logo from "../images/logo_duze.png"
import "./MainCarousel.css"
import config from "../config.json"

const NormalMask = (
  <div className="mask NormalMask">
    <div className="d-flex justify-content-center align-items-center h-100"></div>
  </div>
)

const LinearMask = (
  <div className="mask LinearMask">
    <div
      className="
      bottom-0
      d-flex
      align-items-end
      h-100
      text-center
      justify-content-center
    "
    ></div>
  </div>
)
const MainCarousel = () => (
  <Carousel className="MainCarousel">
    <Carousel.Item className="CarouselItem">
      {/* </div> */}
      <img
        className="d-block w-100 CarouselImg"
        src={first}
        alt="Fizjoterapia - Katarzyna Krej"
      />
      {NormalMask}
      <img
        src={logo}
        alt="logo"
        className="position-absolute start-50 translate-middle Logo"
      />

      {/* <Carousel.Caption> */}
      {/* <h1>Fizjoterapia Katarzyna Krej</h1> */}
      {/* <p>i od kilku lat pracuję jako fizjoterapeuta.</p> */}
      {/* </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item className="CarouselItem">
      <img
        className="d-block w-100 CarouselImg"
        src={second}
        alt={config.karuzela.slajd2}
      />
      {LinearMask}
      <Carousel.Caption>
        <h1>{config.karuzela.slajd2}</h1>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="CarouselItem">
      <img
        className="d-block w-100 CarouselImg"
        src={third}
        alt={config.karuzela.slajd3}
      />
      {LinearMask}
      <Carousel.Caption>
        <h1>{config.karuzela.slajd3}</h1>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default MainCarousel

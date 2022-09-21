import React, { RefObject } from "react"
import WorkingMethodsCard from "./WorkingMethodsCard"
import "./WorkingMethods.css"
import masaz from "../images/WorkingMethods/masaz.jpg"
import tapy from "../images/WorkingMethods/tapy.jpg"
import manualna from "../images/WorkingMethods/manualna.jpg"
import wisceralna from "../images/WorkingMethods/wisceralna.jpg"
import pino from "../images/WorkingMethods/pinoterapia.jpg"
import pnf from "../images/WorkingMethods/pnf.jpg"
import tkanek from "../images/WorkingMethods/tkanek.jpg"
import Title from "./Title"
import { Row } from "react-bootstrap"
import config from "../config.json"

const WorkingMethods = ({ refer }: { refer: RefObject<HTMLDivElement> }) => {
  const images = {
    tapy,
    wisceralna,
    manualna,
    pino,
    pnf,
    tkanek,
    masaz,
  }
  return (
    <>
      <Title refer={refer}>{config.metody.tytul}</Title>
      <Row className="WorkingMethods">
        {config.metody.elementy.map(el => (
          <WorkingMethodsCard
            key={el.tytul}
            img={images[el.nazwa_zdjecia]}
            title={el.tytul}
            desc={el.opis}
          />
        ))}
      </Row>
    </>
  )
}

export default WorkingMethods

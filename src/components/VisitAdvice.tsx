import React, { Fragment, RefObject } from "react"
import AdviceCard from "./AdviceCard"
import stroj from "../images/VisitAdvice/stroj.jpg"
import badania from "../images/VisitAdvice/badania.jpg"
import analiza from "../images/VisitAdvice/analiza.jpg"
import SectionLine from "./SectionLine"
import Title from "./Title"
import config from "../config.json"

const VisitAdvice = ({ refer }: { refer: RefObject<HTMLDivElement> }) => {
  const images = {
    stroj,
    badania,
    analiza,
  }
  return (
    <>
      <Title refer={refer}>{config.przygotuj_sie.tytul}</Title>
      {config.przygotuj_sie.elementy.map((el, index) => (
        <Fragment key={el.tytul}>
          <AdviceCard
            img={images[el.nazwa_zdjecia]}
            title={el.tytul}
            description={el.opis}
            isReordered={index % 2 !== 0}
          />
          {index !== config.przygotuj_sie.elementy.length - 1 && (
            <SectionLine />
          )}
        </Fragment>
      ))}
    </>
  )
}

export default VisitAdvice

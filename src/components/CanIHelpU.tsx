import React, { RefObject } from "react"
import CanIHelpUCard from "./CanIHelpUCard"
import Title from "./Title"

const CanIHelpU = ({ refer }: { refer: RefObject<HTMLDivElement> }) => (
  <>
    <Title refer={refer}>W czym mogę pomóc?</Title>
    <div className="row WorkingMethods">
      <CanIHelpUCard
        title="Wady postawy u dzieci powyżej 6 roku życia"
        points={["Skolioza", "Wady stóp", "Asymetrie"]}
      />
      <CanIHelpUCard
        title="Rehabilitacja neurologiczna"
        points={["Stany po udarach", "SM", "Niedowłady"]}
      />
      <CanIHelpUCard
        title="Fizjoterapia ortopedyczna"
        points={[
          "Drętwienia i mrowienia kończyn",
          "Ograniczenia ruchomości",
          "Bóle głowy i migreny",
          "Stany po złamaniach i skręceniach",
          "Dolegliwości bólowe kręgosłupa (rwy kulszowe, dyskopatie, uwięźnięcia nerwów)",
          "Dolegliwości stawów obwodowych (bark, łokieć, nadgarstek, biodro, kolano, stopa)",
        ]}
      />
      <CanIHelpUCard
        title="Fizjoterapia po operacjach"
        points={[
          "Endoprotezoplastyki",
          "Rekonstrukcje więzadeł kolanowych",
          "Stabilizacje",
          "Artroskopie",
        ]}
      />
      <CanIHelpUCard
        title="Terapia wisceralna"
        points={[
          "Choroba refluksowa",
          "Uczucie ciężkości, bóle brzucha",
          "Choroba wrzodowa",
          "Problemy z trawieniem",
        ]}
      />
    </div>
  </>
)

export default CanIHelpU

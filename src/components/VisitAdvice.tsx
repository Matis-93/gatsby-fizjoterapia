import React, { RefObject } from "react"
import AdviceCard from "./AdviceCard"
import stroj from "../images/VisitAdvice/stroj.jpg"
import badania from "../images/VisitAdvice/badania.jpg"
import analiza from "../images/VisitAdvice/analiza.jpg"
import SectionLine from "./SectionLine"
import Title from "./Title"

const VisitAdvice = ({ refer }: { refer: RefObject<HTMLDivElement> }) => (
  <>
    <Title refer={refer}>Przygotuj się</Title>
    <AdviceCard
      img={stroj}
      title="Strój"
      description="Ze względu na komfort, w trakcie zabiegu najlepiej jest mieć na sobie wygodny strój. Zalecam zabrać ze sobą również krótkie spodenki. Często zdarza się, że leczenie odbywa się także w miejscach oddalonych od źródła bólu. Dlatego na przykład przy dolegliwościach kręgosłupa prawdopodobnie zbadam również Twoje biodra czy kolana. Aby przebiegło to bez zbędnego skrępowania, warto ubrać się wygodnie."
    />
    <SectionLine />
    <AdviceCard
      img={badania}
      title="Badania"
      description="Jeśli posiadasz wyniki badań lub opisy dolegliwości - weź je ze sobą."
      isReordered={true}
    />
    <SectionLine />
    <AdviceCard
      img={analiza}
      title="Analiza"
      description="Przed wizytą przeanalizuj raz jeszcze, co dokładnie Cię boli. Mimo, że zgłaszasz się do mnie z jednym bólem, to często zdarza się, że borykasz się z większą liczbą dolegliwości (na przykład oprócz barku boli Cię również biodro i czasami stopa). Z doświadczenia wiem, że ma to kluczowe znaczenie w terapii. Warto również zaobserwować, co nasila Twoje dolegliwości oraz jak często one występują."
    />
  </>
)

export default VisitAdvice

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

const WorkingMethods = ({ refer }: { refer: RefObject<HTMLDivElement> }) => (
  <>
    <Title refer={refer}>Metody</Title>
    <Row className="WorkingMethods">
      <WorkingMethodsCard
        img={tapy}
        title="Kinesiotaping"
        desc="Metoda polegająca na oklejaniu ciała specjalnymi taśmami. Stosowana zarówno w celu rozluźniania mięśni, jak i stabilizacji stawów."
      />
      <WorkingMethodsCard
        img={wisceralna}
        title="Terapia wisceralna"
        desc="Metoda pracy na narządach wewnętrznych, skuteczna w dolegliwościach bólowych kręgosłupa oraz w problemach z układem trawiennym."
      />
      <WorkingMethodsCard
        img={manualna}
        title="Terapia manualna"
        desc="Specjalistyczna metoda pracy ze stawami, więzadłami i mięśniami mająca na celu przywrócenie prawidłowej biomechaniki ciała człowieka."
      />
      <WorkingMethodsCard
        img={pino}
        title="Pinoterapia"
        desc="Nieinwazyjna metoda polegająca na stymulowaniu określonych obszarów w ciele człowieka za pomocą dłoni terapeuty lub specjalnych narzędzi."
      />
      <WorkingMethodsCard
        img={pnf}
        title="PNF Proprioceptywne Torowanie Nerwowo Mięśniowe"
        desc="Rodzaj treningu, który może zostać zastosowany zarówno u pacjentów neurologicznych, jak i u sportowców."
      />
      <WorkingMethodsCard
        img={tkanek}
        title="Masaż tkanek głębokich"
        desc="Metoda pracy mająca na celu przywrócenie ruchomości w głębszych warstwach tkanek mięśniowych i powięziowych."
      />
      <WorkingMethodsCard img={masaz} title="Masaż" />
    </Row>
  </>
)

export default WorkingMethods

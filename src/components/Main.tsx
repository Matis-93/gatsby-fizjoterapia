import React from "react"
import CanIHelpU from "./CanIHelpU"
import Contact from "./Contact"
import MainCarousel from "./MainCarousel"
import Marketing from "./Marketing"
import AboutMe from "./AboutMe"
import SectionLine from "./SectionLine"
import VisitAdvice from "./VisitAdvice"
import WorkingMethods from "./WorkingMethods"
import RefsObj from "./RefsObject"
import Facebook from "./Facebook"

const Main = ({ refs }: { refs: RefsObj }) => (
  <main>
    <MainCarousel />
    <Marketing>
      <WorkingMethods refer={refs.workingMethods} />
      <SectionLine />
      <CanIHelpU refer={refs.canIHelpU} />
      <SectionLine />
      <VisitAdvice refer={refs.visitAdvice} />
      <AboutMe refer={refs.aboutMe} />
      <Contact refer={refs.contact} />
      <SectionLine />
      <Facebook fbRefer={refs.facebook} priceRefer={refs.price} />
    </Marketing>
  </main>
)

export default Main

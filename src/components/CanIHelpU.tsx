import React, { RefObject } from "react"
import CanIHelpUCard from "./CanIHelpUCard"
import Title from "./Title"
import config from "../config.json"

const CanIHelpU = ({ refer }: { refer: RefObject<HTMLDivElement> }) => (
  <>
    <Title refer={refer}>{config.w_czym_moge_pomoc.tytul}</Title>
    <div className="row WorkingMethods">
      {config.w_czym_moge_pomoc.elementy.map(el => (
        <CanIHelpUCard title={el.tytul} points={el.elementy} />
      ))}
    </div>
  </>
)

export default CanIHelpU

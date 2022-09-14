import React, { useRef } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
  const refs = {
    workingMethods: useRef<HTMLDivElement>(null),
    canIHelpU: useRef<HTMLDivElement>(null),
    visitAdvice: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
    aboutMe: useRef<HTMLDivElement>(null),
    facebook: useRef<HTMLDivElement>(null),
    price: useRef<HTMLDivElement>(null),
  };
  return (
    <div className="App">
      <Header refs={refs} />
      <Main refs={refs} />
      <Footer />
    </div>
  );
}

export default App;

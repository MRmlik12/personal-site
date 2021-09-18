import React, { ReactElement } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./App.css";
import Home from "./views/Home";
import Technologies from "./views/Technologies";
import Projects from "./views/Projects";
import Contact from "./views/Contact";

export default function App(): ReactElement {
  return (
    <div className="app">
      <ReactFullpage
        navigation={true}
        scrollingSpeed={1000}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section home">
                <Home />
              </div>
              <div className="section technologies">
                <Technologies />
              </div>
              <div className="section projects">
                <Projects />
              </div>
              <div className="section contact">
                <Contact />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}

import React from "react";
import Header from "./Componentes/Header";
import Main from "./Componentes/Main";
import { GlobalStyle } from "./Styles/GlobalStyled";

export default function App(){
  return(
    <section>
      <GlobalStyle />
      <Header />
      <Main />
    </section>
  )
}
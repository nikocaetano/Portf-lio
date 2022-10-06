import React from "react";
import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";
import Rotas from "./Rotas/Rotas";
import { GlobalStyle } from "./Styles/GlobalStyled";

export default function App(){
  return(
    <section>
      <GlobalStyle />
      <Header />
      <Rotas/>
    </section>
  )
}
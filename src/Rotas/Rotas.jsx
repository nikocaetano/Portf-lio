import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutMe from "../Componentes/AboutMe";
import Ods from "../Componentes/Ods";
import Works from "../Componentes/Works";
import Home from "../Componentes/Home";
import * as S from "../Styles/Header-styles"

export default function Rotas(){
    return(
        <section>
            <BrowserRouter>
            <Rota rotaZero="Home" rotaOne="About Me" rotaTwo="Works" rotaThree="ODS" />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/AboutMe" element={<AboutMe />} />
                    <Route path="/Works" element={<Works />} />
                    <Route path="/Ods" element={<Ods />} />
                </Routes>
            </BrowserRouter>
        </section>
    )
}

const Rota = ({ rotaZero, rotaOne, rotaTwo, rotaThree }) => {
    return (
        <S.Nav>
            <S.Ul>
                <li>
                    <S.Links to="/Home">{rotaZero}</S.Links>
                </li>
                <li>
                    <S.Links to="/AboutMe">{rotaOne}</S.Links>
                </li>
                <li>
                    <S.Links to="/Works">{rotaTwo}</S.Links>
                </li>
                <li>
                    <S.Links to="/Ods">{rotaThree}</S.Links>
                </li>
            </S.Ul>
        </S.Nav>
    )
}
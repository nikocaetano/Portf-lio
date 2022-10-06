import React from "react";
import * as S from "../Styles/Header-styles"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutMe from "./AboutMe";
import Ods from "./Ods";
import Works from "./Works";
import Logo from "../Styles/logo.png"

export default function Header() {
    return (
        <S.Section>
            <S.DivOne>
                <S.Image src={Logo}/>
            </S.DivOne>
            <BrowserRouter>
                <Rota rotaOne="About Me" rotaTwo="Works" rotaThree="ODS" />
                <Routes>
                    <Route path="/AboutMe" element={<AboutMe />} />
                    <Route path="/Works" element={<Works />} />
                    <Route path="/Ods" element={<Ods />} />
                </Routes>
            </BrowserRouter>
        </S.Section>
    )
}

const Rota = ({rotaOne, rotaTwo, rotaThree}) => {
    return(
        <S.Nav>
            <S.Ul>
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
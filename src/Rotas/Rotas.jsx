import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutMe from "../Componentes/AboutMe";
import Works from "../Componentes/Works";
import Home from "../Componentes/Home";
import Menu from "../images/hamburger.png"
import * as S from "../Styles/Header-styles"


export default function Rotas() {
    const [open, setOpen] = useState(true);
    const Modo = () => {
        setOpen(!open)
    }

    return (
        <section>
            <BrowserRouter>
                
                {open &&
                    <S.Nav>
                        <S.Ul>
                            <S.Li>
                                <S.Links to="/">Home</S.Links>
                            </S.Li>
                            <S.Li>
                                <S.Links to="/AboutMe">About Me</S.Links>
                            </S.Li>
                            <S.Li>
                                <S.Links to="/Works">Works</S.Links>
                            </S.Li>                           
                        </S.Ul>
                    </S.Nav>
                }
                <figure onClick={() => { Modo() }} >
                    <S.ImgMenu src={Menu} />
                </figure>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/AboutMe" element={<AboutMe />} />
                    <Route path="/Works" element={<Works />} />
                </Routes>
            </BrowserRouter>
        </section>
    )
}

/*const Rota = ({ rotaOne, rotaTwo, rotaThree }) => {
    return (
     <S.Nav>
         <S.Ul>
            <S.Li>
                <S.Links to="/">{rotaOne}</S.Links>
            </S.Li>
            <S.Li>
                <S.Links to="/AboutMe">{rotaTwo}</S.Links>
            </S.Li>
            <S.Li>
                <S.Links to="/Works">{rotaThree}</S.Links>
            </S.Li>
        </S.Ul>
    </S.Nav>
    )
}*/

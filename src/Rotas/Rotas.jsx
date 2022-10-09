import React, {useState} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutMe from "../Componentes/AboutMe";
import Ods from "../Componentes/Ods";
import Works from "../Componentes/Works";
import Home from "../Componentes/Home";
import Menu from "../images/hamburger.png"
import * as S from "../Styles/Header-styles"


export default function Rotas(){
    const [open, setOpen] = useState(true);
    const Modo = () => {
        setOpen(!open)
    }
 
    return(
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
                <S.Li>
                    <S.Links to="/Ods">Ods</S.Links>
                </S.Li>
            </S.Ul>
        </S.Nav>
            }
            <figure  onClick={() => {Modo()}} >
                <S.ImgMenu src={Menu}/>
            </figure>
            
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

/*const Rota = ({ rotaZero, rotaOne, rotaTwo, rotaThree }) => {
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
}*/
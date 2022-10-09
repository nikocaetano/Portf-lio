import React from "react";
import * as S from "../Styles/Header-styles"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Logo2 from "../images/logo2.png"
import Logo from "../images/logo.png"
import {Helmet} from "react-helmet"


export default function Header() {
    return (
        <S.Section>
            <Helmet>
                <meta charSet="UTF-8" />
                <title>Nikolas Caetano Portfólio</title>
            </Helmet>
            <S.DivOne>
                <S.Image src={Logo} />
                <S.ResLogo src={Logo2}/>
            </S.DivOne>
        </S.Section>
    )
}


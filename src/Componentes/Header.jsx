import React from "react";
import * as S from "../Styles/Header-styles"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Logo from "../Styles/logo.png"


export default function Header() {
    return (
        <S.Section>
            <S.DivOne>
                <S.Image src={Logo} />
            </S.DivOne>
        </S.Section>
    )
}


import React from "react";
import Cachos from "../images/cachos.jpg"
import Calc from "../images/calculadora.jpg"
import Hp from "../images/hp.jpg"
import TodoH from "../images/todoHooks.jpg"
import Dogs from "../images/apiDogs.jpg"
import Movies from "../images/apiMovies.jpg"
import * as S from "../Styles/Works-styles"
import { BrowserRouter, Link } from "react-router-dom";

export default function Works() {
    return (
        <S.Section>
            <figure>
                <a href="https://nikocaetano.github.io/Desafio-final---Crespos/" target="_blank">
                    <S.Image src={Cachos} />
                </a>
            </figure>
            <figure>
                <a href="https://desafio-calculadora.vercel.app/" target="_blank">
                    <S.Image src={Calc} />
                </a>
            </figure>
            <figure>
                <a href="https://desafio-hp.vercel.app/" target="_blank">
                    <S.Image src={Hp} />
                </a>
            </figure>
            <figure>
                <a href="https://desafio-to-do-hooks.vercel.app/" target="_blank">
                    <S.Image src={TodoH} />
                </a>
            </figure>
            <figure>
                <a href="https://adoptpets.vercel.app/" target="_blank">
                    <S.Image src={Dogs} />
                </a>
            </figure>
            <figure>
                <a href="https://nikoflix.vercel.app/" target="_blank">
                    <S.Image src={Movies} />
                </a>
            </figure>
        </S.Section>
    )
}
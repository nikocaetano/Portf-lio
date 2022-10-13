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

            <S.H1>Get to know my projects</S.H1>

            <S.SecTwo>
                <S.Card>
                    <a href="https://nikocaetano.github.io/Desafio-final---Crespos/" target="_blank">
                        <S.Image src={Cachos} />
                    </a>
                    <S.Caixa>
                        <S.CardHtml>HTML5</S.CardHtml>
                        <S.CardCss>CSS3</S.CardCss>
                    </S.Caixa>
                </S.Card>
                <S.Card>
                    <a href="https://desafio-calculadora.vercel.app/" target="_blank">
                        <S.Image src={Calc} />
                    </a>
                    <S.Caixa>
                        <S.CardJs>JS</S.CardJs>
                        <S.CardReact>REACT</S.CardReact>
                    </S.Caixa>
                </S.Card>
                <S.Card>
                    <a href="https://desafio-hp.vercel.app/" target="_blank">
                        <S.Image src={Hp} />
                    </a>
                    <S.Caixa>
                        <S.CardJs>JS</S.CardJs>
                        <S.CardReact>REACT</S.CardReact>
                    </S.Caixa>
                </S.Card>
                <S.Card>
                    <a href="https://desafio-to-do-hooks.vercel.app/" target="_blank">
                        <S.Image src={TodoH} />
                    </a>
                    <S.Caixa>
                        <S.CardJs>JS</S.CardJs>
                        <S.CardReact>REACT</S.CardReact>
                    </S.Caixa>
                </S.Card>
                <S.Card>
                    <a href="https://adoptpets.vercel.app/" target="_blank">
                        <S.Image src={Dogs} />
                    </a>
                    <S.Caixa>
                        <S.CardJs>JS</S.CardJs>
                        <S.CardReact>REACT</S.CardReact>
                    </S.Caixa>
                    <S.Text>Site ilustrativo para uma feira de adoção online</S.Text>
                </S.Card>
                <S.Card>
                    <a href="https://nikoflix.vercel.app/" target="_blank">
                        <S.Image src={Movies} />
                    </a>
                    <S.Caixa>
                        <S.CardJs>JS</S.CardJs>
                        <S.CardReact>REACT</S.CardReact>
                    </S.Caixa>
                </S.Card>
            </S.SecTwo>
        </S.Section>
    )
}
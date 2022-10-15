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
                    <S.Text>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below 
                        for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum 
                        et Malorum" by Cicero are also reproduced in their exact original form, 
                        accompanied by English versions from the 1914 translation by H. Rackham.</S.Text>
                </S.Card>
                <S.Card>
                    <a href="https://desafio-calculadora.vercel.app/" target="_blank">
                        <S.Image src={Calc} />
                    </a>
                    <S.Caixa>
                        <S.CardJs>JS</S.CardJs>
                        <S.CardReact>REACT</S.CardReact>
                    </S.Caixa>
                    <S.Text>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below 
                        for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum 
                        et Malorum" by Cicero are also reproduced in their exact original form, 
                        accompanied by English versions from the 1914 translation by H. Rackham.</S.Text>
                </S.Card>
                <S.Card>
                    <a href="https://desafio-hp.vercel.app/" target="_blank">
                        <S.Image src={Hp} />
                    </a>
                    <S.Caixa>
                        <S.CardJs>JS</S.CardJs>
                        <S.CardReact>REACT</S.CardReact>
                    </S.Caixa>
                    <S.Text>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below 
                        for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum 
                        et Malorum" by Cicero are also reproduced in their exact original form, 
                        accompanied by English versions from the 1914 translation by H. Rackham.</S.Text>
                </S.Card>
                <S.Card>
                    <a href="https://desafio-to-do-hooks.vercel.app/" target="_blank">
                        <S.Image src={TodoH} />
                    </a>
                    <S.Caixa>
                        <S.CardJs>JS</S.CardJs>
                        <S.CardReact>REACT</S.CardReact>
                    </S.Caixa>
                    <S.Text>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below 
                        for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum 
                        et Malorum" by Cicero are also reproduced in their exact original form, 
                        accompanied by English versions from the 1914 translation by H. Rackham.</S.Text>
                </S.Card>
                <S.Card>
                    <a href="https://adoptpets.vercel.app/" target="_blank">
                        <S.Image src={Dogs} />
                    </a>
                    <S.Caixa>
                        <S.CardJs>JS</S.CardJs>
                        <S.CardReact>REACT</S.CardReact>
                    </S.Caixa>
                    <S.Text>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below 
                        for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum 
                        et Malorum" by Cicero are also reproduced in their exact original form, 
                        accompanied by English versions from the 1914 translation by H. Rackham.</S.Text>
                </S.Card>
                <S.Card>
                    <a href="https://nikoflix.vercel.app/" target="_blank">
                        <S.Image src={Movies} />
                    </a>
                    <S.Caixa>
                        <S.CardJs>JS</S.CardJs>
                        <S.CardReact>REACT</S.CardReact>
                    </S.Caixa>
                    <S.Text>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below 
                        for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum 
                        et Malorum" by Cicero are also reproduced in their exact original form, 
                        accompanied by English versions from the 1914 translation by H. Rackham.</S.Text>
                </S.Card>
            </S.SecTwo>
        </S.Section>
    )
}
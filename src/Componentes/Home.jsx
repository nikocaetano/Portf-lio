import React from "react";
import * as S from "../Styles/Home-styles"
import Imagem from "../images/boy.png"
import Photo from "../images/photo.jpg"
import Insta from "../images/instagram.png"
import Linkedin from "../images/linkedin.png"
import GitHub from "../images/github.png"
import Google from "../images/google.png"
import Curriculo from "../images/curriculo.png"

export default function Home() {
    return (
        <S.Section>
            <S.Networks>
                <S.H1>Hi, i'm Nikolas Caetano, Front End developer</S.H1>
                <S.ImageRes src={Imagem} />
                <div>
                <a href="https://www.instagram.com/nikocaetano/" target="_blank">
                    <S.Redes src={Insta} alt="Icone Instagram" />
                </a>
                <a href="https://www.linkedin.com/in/nikolas-caetano-5059aa205/" target="_blank">
                    <S.Redes src={Linkedin} alt="Icone LinkedIn" />
                </a>
                <a href="https://github.com/nikocaetano" target="_blank">
                    <S.Redes src={GitHub} alt="Icone GitHUb" />
                </a>
                <a href="" target="_blank">
                    <S.Redes src={Google} alt="Icone Email" />
                </a>
                <a href="" target="_blank">
                    <S.Redes src={Curriculo} alt="Icone Curriculo" />
                </a>
                </div>
            </S.Networks>
            <S.Image src={Imagem} />
        </S.Section>
    )
}
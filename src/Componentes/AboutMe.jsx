import React from "react";
import * as S from "../Styles/AboutMe-style"
import Photo from "../images/photo.jpg"
import Insta from "../images/instagram.png"
import Linkedin from "../images/linkedin.png"
import GitHub from "../images/github.png"
import Google from "../images/google.png"
import Curriculo from "../images/curriculo.png"

export default function AboutMe() {
    return (
        <S.Section>
            <S.Box>
                <S.H1>Get know me</S.H1>
                <S.Text>Hello, my name is Nikolas Caetano, I am 24 years old and I am
                    from Mogi das Cruzes, São Paulo. I have a degree in Tourism
                    from Mato Grosso State University and in the beginning of
                    2022 I decided to migrate career. I met the project
                    "VaiNaWeb' through a friend who was also a student,
                    I started to specialize in developing front-end websites
                    and now I have my portfolio available with all my projects.
                    Get in touch with me through my social networks.
                </S.Text>
                <S.Text>Xoxo, Nikolas.</S.Text>
                <S.Networks>
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
                </S.Networks>
            </S.Box>
            <figure>
                <S.Image src={Photo} />
            </figure>
        </S.Section>
    )
}
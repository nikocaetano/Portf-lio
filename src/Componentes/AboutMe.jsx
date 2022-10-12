import React from "react";
import * as S from "../Styles/AboutMe-style"
import Photo from "../images/photo.jpg"

export default function AboutMe(){
    return(
        <S.Section>
            <p>Cade essa bodega</p>
            <figure>
                <img src={Photo}/>
            </figure>
        </S.Section>
    )
}
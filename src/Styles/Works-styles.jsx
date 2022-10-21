import styled from "styled-components";

export const Section = styled.section`
 display: flex;
 height:190vh;
 flex-direction:column;
 font-family: 'Jost';
 @media only screen and (min-width:300px) and (max-width:600px){
    height: 500vh;
}
`

export const H1 = styled.h1`
text-align:center;
font-size: 2em;
padding-bottom: 6vh;
@media only screen and (min-width:300px) and (max-width:600px){
    font-size: 1.5em;
}
`

export const SecTwo = styled.section`
display: flex;
flex-wrap:wrap;
justify-content:space-evenly;
height: 190vh;
@media only screen and (min-width:300px) and (max-width:600px){
    flex-direction: column;
    height: 500vh;
    align-items:center;
}

`

export const Card = styled.div`
border:transparent;
display: flex;
flex-direction:column;
border-radius:10px; 
width:25vw;
height:36vw;
@media only screen and (min-width:601px) and (max-width:1920px){
    &:hover{
    background-color: #e7c6ff;
    transform: scale(100%);
    transition: 1s;
    p{
        display:initial;
        transform: scale(100%);
        transition: 1s;
    }
}
}
@media only screen and (min-width:300px) and (max-width:600px){
    width:90vw;
    height: 120vw;
    box shadow:
    background-color: white;    
    box-shadow: 2px 0px 15px 1px #000;     
}
`

export const Caixa = styled.div`
display: flex;
justify-content: space-evenly;
width:50%;

`

export const Text = styled.p`
display:none;
padding: 1vw 1.5vw 0vw 1.5vw;
text-align:justify;
font-size:13px;
@media only screen and (min-width:300px) and (max-width:600px){
    display:initial;
    font-size: 1em;
    padding: 1vw 2vw 0vw 2vw ;
}
`

export const Image = styled.img`
width:25vw;
border-radius: 10px 10px 0px 0px;
box-shadow: 2px 0px 15px 1px #000;
@media only screen and (min-width:300px) and (max-width:600px){
    width: 90vw;
    box-shadow: none;
}
`

export const CardHtml = styled.p`
width: 4.3vw;
background-color: #fb5607;
color: white;
font-size: 1.2vw;
text-align:center;
border-radius: 8px;
display: none;
@media only screen and (min-width:300px) and (max-width:600px){
    font-size: 4vw;
    width: 15vw;
    display:initial;
}
`

export const CardCss = styled.p`
width: 4.3vw;
background-color: #0096c7;
color: white;
font-size: 1.2vw;
text-align:center;
border-radius: 8px;
display:none;
@media only screen and (min-width:300px) and (max-width:600px){
    font-size: 4vw;
    width: 15vw;
    display:initial;
}
`

export const CardJs = styled.p`
width: 4.3vw;
background-color: #ffba08;
color: white;
font-size: 1.2vw;
text-align:center;
border-radius: 8px;
display:none;
@media only screen and (min-width:300px) and (max-width:600px){
    font-size: 4vw;
    width: 15vw;
    display:initial;
}
`

export const CardReact = styled.p`
width: 4.3vw;
background-color: #4cc9f0;
color: white;
font-size: 1.2vw;
text-align:center;
border-radius: 8px;
display:none;
@media only screen and (min-width:300px) and (max-width:600px){
    font-size: 4vw;
    width: 15vw;
    display:initial;
}
`
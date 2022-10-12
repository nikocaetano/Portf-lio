import styled from "styled-components";

export const Section = styled.section`
 display: flex;
 height:130vh;
 flex-direction:column;
 font-family: 'Jost';
`

export const H1 = styled.h1`
text-align:center;
font-size: 2em;
padding-bottom: 6vh;
`

export const SecTwo = styled.section`
display: flex;
flex-wrap:wrap;
justify-content:space-evenly;
height: 130vh;
`

export const Card = styled.div`
border:transparent;
display: flex;
flex-direction:column;
border-radius:10px; 
width:25vw;
height:35vw;
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
`

export const Caixa = styled.div`
display: flex;
justify-content: space-evenly;
width:50%;
`

export const Text = styled.p`
display:none;
padding: 1vw 0 1.5vw 1vw;
`

export const Image = styled.img`
width:25vw;
border-radius: 10px 10px 0px 0px;
box-shadow: 2px 0px 15px 1px #000;
`

export const CardHtml = styled.p`
width: 4.3vw;
background-color: red;
color: white;
font-size: 1.2vw;
text-align:center;
border-radius: 8px;
display: none;
`

export const CardCss = styled.p`
width: 4.3vw;
background-color: green;
color: white;
font-size: 1.2vw;
text-align:center;
border-radius: 8px;
display:none;
`

export const CardJs = styled.p`
width: 4.3vw;
background-color: orange;
color: white;
font-size: 1.2vw;
text-align:center;
border-radius: 8px;
display:none;
`

export const CardReact = styled.p`
width: 4.3vw;
background-color: blue;
color: white;
font-size: 1.2vw;
text-align:center;
border-radius: 8px;
display:none;
`
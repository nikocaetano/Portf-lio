import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const Section = styled.section`
width:100%;
height:10vw;
background-color: #240046;
`

export const DivOne = styled.div`
width:18%;
display:inline-block;
color:white;
font-family: 'Jost';
`
export const Image = styled.img`
width: 10vw;
@media only screen and (min-width:300px) and (max-width:600px){
    position:relative;
    left: 43vw;
}
`

export const H1 = styled.h1`
font-size: 10vw;
`

export const Nav = styled.nav`
display:flex;
justify-content:space-evenly;
font-family: 'Jost';
padding-left:28vw;
position:relative;
bottom: 5vw;

`

export const Ul = styled.ul`
display:flex;
list-style:none;
width:40vw;
justify-content:space-evenly;
align-items:flex-end;
@media only screen and (min-width:300px) and (max-width:600px){
    flex-direction:column;
    position:relative;
    top:4vw;
    left: 13vw;
    text-align:center;
}
`

export const Links = styled(Link)`
text-decoration:none;
color:white;
`

export const ImgMenu = styled.img`
display:none;

@media only screen and (min-width:300px) and (max-width:600px){
    display:initial;
    position: absolute;
    left: 90vw;
    top: 2.5vw;
    width:8vw;
}
`
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
    display:none;
}
`

export const ResLogo = styled.img`
display:none;
@media only screen and (min-width:300px) and (max-width:600px){
    display:initial;
    position:relative;
    left: 42vw;
    width:13vw;
    bottom:1vw;
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
    left: 27vw;
    text-align:center;
    background-color:#240046;
    width:18vw; 
    align-items:center;
    height: 25vw;
    font-size: 0.8em;
    z-index:1000;
    
}
`
export const Li = styled.li`

`

export const Links = styled(Link)`
text-decoration:none;
color:white;
cursor:pointer;
@media only screen and (min-width:300px) and (max-width:600px){
    z-index: 3;
    &:hover{
        border-bottom:solid white;
        cursor:pointer;        
    tranform: scale(105%);
    transition: ease-in-out 0.5s;
    }
    }

`

export const ImgMenu = styled.img`
display:none;

@media only screen and (min-width:300px) and (max-width:600px){
    display:initial;
    position: absolute;
    left: 87vw;
    top: 2.5vw;
    width:8vw;
}
`
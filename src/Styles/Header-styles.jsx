import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const Section = styled.section`
width:100%;
height:12vw;
`

export const DivOne = styled.div`
width:18%;
display:inline-block;
color:white;
font-family: 'Jost';
`
export const Image = styled.img`
width: 12vw;
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
`

export const Links = styled(Link)`
text-decoration:none;
color:white;
`

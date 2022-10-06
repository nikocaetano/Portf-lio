import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const Nav = styled.nav`
display:flex;
justify-content:space-evenly;
height:13vw;
font-family: 'Jost';
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

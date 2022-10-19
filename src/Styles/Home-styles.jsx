import styled from "styled-components";

export const Section = styled.section`
width: 100%;
height: 45vw;
color:black;
display: flex;
justify-content:center;
display: flex;
flex-direction:column;
align-items:center;
margin-top:7vw;
@media only screen and (min-width:300px) and (max-width:600px){
    padding-top: 60vw;
}
`

export const H1 = styled.h1`
text-align:center;
width: 40vw;
font-size: 1.5em;
@media only screen and (min-width:300px) and (max-width:600px){
    width: 60vw;
}
`

export const Image = styled.img`
width: 45vw;
@media only screen and (min-width:300px) and (max-width:600px){
    width: 80vw;
}
`

export const Networks = styled.div`
display:flex;
justify-content:center;
padding-top: 5vw;

`

export const Redes = styled.img`
width: 5vw;
@media only screen and (min-width:300px) and (max-width:600px){
    width: 10vw;
     
 }
`
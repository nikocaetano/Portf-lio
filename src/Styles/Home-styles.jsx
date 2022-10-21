import styled from "styled-components";

export const Section = styled.section`
width: 100%;
height: 45vw;
color:black;
display: flex;
justify-content:center;
display: flex;
align-items:center;
margin-top:2vw;
@media only screen and (min-width:300px) and (max-width:600px){
    padding-top: 60vw;
    flex-direction:column;
    width: 100%;
}
`

export const H1 = styled.h1`
text-align:center;
width: 40vw;
font-size: 1.5em;
padding-bottom: 5vw;
@media only screen and (min-width:300px) and (max-width:600px){
   width: 100vw;
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
width: 30vw;
flex-wrap: wrap;
@media only screen and (min-width:300px) and (max-width:600px){
    width: 100%;
}

`

export const Redes = styled.img`
width: 5vw;
@media only screen and (min-width:300px) and (max-width:600px){
    width: 10vw;
     
 }
`
import styled from "styled-components";

export const Section = styled.section`
display:flex;
justify-content: space-evenly;
font-family:'Jost';
@media only screen and (min-width:300px) and (max-width:600px){
    
}
`

export const Image = styled.img`
width: 30vw;
height: 45vw;
border-radius:15px;
box-shadow: 1px 2px 10px 1px #000;  
@media only screen and (min-width:300px) and (max-width:600px){
    display: none;    
}
`

export const Figure = styled.figure`
@media only screen and (min-width:300px) and (max-width:600px){
    display: flex;
    justify-content:center;    
}
`

export const Imagem = styled.img`
width: 30vw;
height: 45vw;
border-radius:15px;
display: none;
@media only screen and (min-width:300px) and (max-width:600px){
    display: initial;
    width: 40vw;
    height: 60vw;
    box-shadow: 1px 2px 10px 1px #000;  
}
`

export const Box = styled.div`
width: 40%;
align-items: center;
height: 30vw;
@media only screen and (min-width:300px) and (max-width:600px){
    width: 100%;
}
`

export const H1 = styled.h1`
font-size:2em;
text-align: center;
padding-bottom: 3vw;
`

export const Text = styled.p`
text-align:justify;
padding: 0vw 0vw 2vw 0vw;
@media only screen and (min-width:300px) and (max-width:600px){
    padding: 3vw 3vw 0 3vw;
    font-size:1.2em; 
}
`

export const Sign = styled.p`
width: 6vw;
@media only screen and (min-width:300px) and (max-width:600px){
    padding: 3vw 3vw 0 3vw;
    font-size:1.2em; 
    width: 6vw;
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

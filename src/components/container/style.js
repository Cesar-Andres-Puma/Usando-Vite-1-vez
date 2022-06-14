import styled  from "styled-components";

export const SegurandoContainer = styled.div`
width: 100%;
background-color: black;
margin-top: 50px;

`
export const Container = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
max-width: 1200px;
margin: 0 auto;
align-items: center;
gap: 40px;
background-color: black;
@media screen and (max-width:1250px){
    margin: 0 2rem;
    grid-template-columns: 1fr;
}
`
export const ContainerTexto = styled.div`
@media (max-width:1250px)
{
    grid-row: 2/3;
}
`
export const BoxTitulo =styled.h1`
font-size: 2rem;
color: white;
`
export const BoxTexto = styled.p`
color: white;
font-size: 1.5rem;
line-height: 2rem;
`
export const ContainerImagen = styled.img`
width: 100%;
display: block;
`
export const SegurandoImagen = styled.div`
height: 500px;
`
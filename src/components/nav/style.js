import styled from 'styled-components'

export const Navegacao = styled.div`
  background-color: black;
`
export const NavLogo = styled.a`
color: white;
font-size: 2rem;
font-weight: 600;
text-decoration: none;
cursor: pointer;

`
export const NavBar = styled.ul`
display: flex;
`
export const Links = styled.a`
color: white;
padding: 0 2rem;
font-size: 2rem;
font-weight: 00;
transition: 0.5s;
text-decoration: none;
position: relative;
&:hover{
  background-color: white;
  color: black;
}
&::after{
  content: "";
  width:0;
  height: 5px;
  display:block;
  background-color: red;
  position: absolute;
  transition: 0.5s;
}
&:hover::after{
  width: 100%;
}
`
export const FlexMenu = styled.div`
max-width: 1200px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;
`


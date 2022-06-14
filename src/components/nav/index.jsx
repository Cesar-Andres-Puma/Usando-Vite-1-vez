import * as S from './style'

export const Nav = () =>{
    return(
    <S.Navegacao>
       <S.FlexMenu>
        <S.NavLogo href="./">Pers.Animes</S.NavLogo>
        <S.NavBar>
            <S.Links href="./">Home</S.Links>
            <S.Links href="./">Sobre</S.Links>
            <S.Links href="./">Contato</S.Links>
        </S.NavBar>
        </S.FlexMenu>
    </S.Navegacao>

    )
}
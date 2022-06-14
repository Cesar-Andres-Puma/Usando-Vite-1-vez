import * as A from './style'
import { personagens } from './personagens'

export const Container = () => {
return(
    <A.SegurandoContainer>
      <A.Container>
        {personagens.map((itens)=>(
          <>
           <A.ContainerTexto>
          <A.BoxTitulo>{itens.nome}</A.BoxTitulo>
          <A.BoxTexto>{itens.descricao}</A.BoxTexto>
          </A.ContainerTexto>
          <A.SegurandoImagen>
          <A.ContainerImagen src={itens.foto}/>
          </A.SegurandoImagen>
          </>
        ))}
      </A.Container>
      </A.SegurandoContainer>
)
}
import * as A from './style'
import CuieAnime from '../public/assets/animeBunni.jpeg'
import { Texto } from './texto'

export const Container = () => {
return(
    <A.SegurandoContainer>
      <A.Container>
       <A.ContainerTexto>
        <A.BoxTitulo>${Texto.NomePerso.Bunni}</A.BoxTitulo>
        <A.BoxTexto>${Texto.Bunni}</A.BoxTexto>
        </A.ContainerTexto>
        <div>
        <A.ContainerImagen src={CuieAnime}/>
        </div>
       
      </A.Container>
      </A.SegurandoContainer>
)
}
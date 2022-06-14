import * as A from './style'
import CuieAnime from '../public/assets/animeBunni.jpeg'
export const Container = () => {
return(
    <A.SegurandoContainer>
      <A.Container>
       <A.ContainerTexto>
        <A.BoxTitulo>Mai Sakurajima</A.BoxTitulo>
        <A.BoxTexto>Mai é um indivíduo sério, especialmente em torno de Sakuta Azusagawa. Ela pode ser considerada como um tsundere tipo B: ela não é dura por padrão, mas ela pode ser facilmente irritada e se deparar como um pouco snappy ou violenta quando Sakuta faz ou diz algo lascivo. Ela geralmente responde às observações abertamente obscenas de Sakuta sobre ela, beliscando-o, batendo nele ou pisando em seu pé, mas também pode ser perturbado tão facilmente e seu ato de tsundere falha. Mai tende a ignorar e rechear sentimentos desagradáveis em vez de lidar com eles. Sakuta frequentemente aponta que ela é "desonesta", muitas vezes mentindo sobre seus sentimentos. Ela e Sakuta gostam de brincar um com o outro, mas apesar de sua snarkiness, ela é de coração puro e até tímida em torno das piadas de Sakuta.</A.BoxTexto>
        </A.ContainerTexto>
        <div>
        <A.ContainerImagen src={CuieAnime}/>
        </div>
       
      </A.Container>
      </A.SegurandoContainer>
)
}
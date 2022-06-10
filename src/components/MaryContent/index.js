import React from 'react';
import { useWomen } from '../../hooks/WomenProvider';
import { useLocation } from "react-router-dom"
import './styles.css';

function MaryContent() {
  const {womenList} = useWomen()
  const location = useLocation()
  const [,name] = location.pathname.split("/")
  const data = womenList.filter(woman => woman.image === name)[0]
  return (
  <div className='container'>
    <h1 className='título'>Mary Winston Jackson</h1>
    
    <h3>Quem foi Mary Jackson?</h3>
    <p>
    Foi uma matemática e primeira engenheira aeroespacial negra do National 
    Advisory Committee for Aeronautics (NACA), que se tornou a atual NASA.
    Mary Jackson nasceu em Hampton, uma cidade no Estado da Virgínia, a 300 
    km de Washington, DC. Hampton é uma cidade de maioria negra (51% da 
    população), e abriga uma instituição de ensino superior voltada 
    à inclusão racial. É a Hampton University, fundada em 1868 por ativistas
    negros e brancos, logo após a Guerra Civil Americana, com a ideia de 
    prover educação de primeira linha a quem tinha nascido como escravo. 
    Uma das alunas ali foi Alberta Williams King, mãe de Martin Luther King,
    que estudou magistério lá no início do século 20.</p>

    <img
      className="image-mary"
      src={require(`../../assets/images/${data.image}_01.png`)}
      alt={data.image}
      loading="lazy"
    />

    <p>
    Mary Jackson formou-se em 1942. Trabalhou por décadas como engenheira na
    Nasa. E agora, 80 anos depois, a agência espacial irá rebatizar sua sede,
    em Washington, com o nome dela. 
    </p>
    <h3>Trajetória</h3>
    <p>
    Jackson formou-se em matemática e em física. Em 1942, sem encontrar 
    oportunidades mais interessantes, aceitou um convite para dar aulas 
    numa escola (exclusiva para negros), em outra cidade, ali perto. Um ano 
    depois, voltou para Hampton. 
    Virou recepcionista. Depois trabalhou como bibliotecária e secretária. 
    Até que, em 1951, aos 30 anos, conseguiu um vaga na Nasa. Mais 
    especificamente, no Langley Research Center, que fica em Hampton mesmo. 
    </p>
    <p>
    Ela foi trabalhar como “computadora”. Era uma época em que os cálculos 
    de engenharia aeronáutica feitos por computador hoje eram realizados no
    braço, por mentes humanas. A Nasa preferia contratar mulheres para a tarefa.
    Na época em que Jackson entrou para a agência, havia outras 400 mulheres 
    nesse ofício lá. 
    </p>
    <img
      className="image-mary"
      src={require(`../../assets/images/${data.image}_03.png`)}
      alt={data.image}
      loading="lazy"
    />
    <p>
    Não que a Nasa fosse um oásis da inclusão. Jackson e suas colegas 
    trabalhavam em uma área segregada, só com mulheres negras, a West
    Area Computing Section.
    </p>
    <p>
    Mesmo assim, ela conseguiu mostrar que tinha uma competência fora da curva.
    Dois anos depois de ter entrado, foi convidada para trabalhar com os 
    engenheiros do túnel de vento de Langley – onde testava fuselagens de futuros
    aviões e foguetes sob ventos de até duas vezes a velocidade do som. 
    </p>
    <p>
    Para se tornar uma engenheira efetiva ali, Jackson tinha de fazer certos
    cursos complementares à noite. Precisou de uma autorização especial para 
    frequentar aulas com colegas brancos.
    E em 1958 ela se tornaria a primeira mulher negra com um cargo de 
    engenheira na Nasa. Passou as duas décadas seguintes desenvolvendo 
    estudos sobre aerodinâmica de foguetes.  
    </p>

    <img
      className="image-mary"
      src={require(`../../assets/images/${data.image}_02.png`)}
      alt={data.image}
      loading="lazy"
    />

    <p>
    Em 1979, perto de completar 60 anos, Mary Jackson deixou a engenharia e 
    passou a trabalhar para o Federal Women’s Program. 
    Trata-se de uma iniciativa gavernamental que promove a inclusão de 
    mulheres no mercado de trabalho, e que mantém um escritório na Nasa até
    hoje.  
    Lá, Jackson passou a trabalhar para promover a ascensão profissional de
    outras mulheres negras. Aposentou-se em 1985.
    </p>
    <h3>Legado</h3>
    
    <p>
    Mary Jackson, engenheira aeroespacial, morreu em 2005, aos 84 anos. 
    Em 2017, teve parte de sua história contada no filme Estrelas Além do
    Tempo (2017), que fala sobre ela e suas colegas da West Area Computing Section.
    E agora seu nome fica eternizado na sede da Nasa, numa amostra de como o
    poder de superação de cada pessoa é capaz de mudar a história.
    </p>

   
    
  </div>
)}

export default MaryContent;
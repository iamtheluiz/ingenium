import Head from 'next/head'
import Menu from '../../components/menu'
import styled from 'styled-components'
import { getCoursesBySlug, getAllCourses } from '../../lib/courses'
import markdownToHtml from '../../lib/mdToHtml'

import UserGraduate from '../../public/images/user-graduate-solid.svg';
import CalendarDay from '../../public/images/calendar-day-solid.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 64px;
  margin: 0 auto;
`

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 520px;

  background-position: 50% 50%;
  background-size: 100% auto;
  
  color: white;

  h1 {
    font-size: 64px;
  }
  p {
    font-size: 24px;
  }
`

const BannerInfo = styled.div`
  display: flex;
  flex-direction: row;
  height: 160px;
  margin: 0 auto;
  margin-top: 36px;
`;
const BannerItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 240px;
  margin: 0px 16px;
  border-radius: 16px;
  background-color: #F5F5F5;
  box-shadow: 0px 5px 5px #000000a8;
  color: black;

  svg {
    margin-bottom: 8px;
  }

  strong {
    font-size: 16pt;
  }
`

const Info = styled.section`
  display: flex;
  flex-direction: row;
`;
const InfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 55%;
  padding: 24px;

  h2 {
    margin-bottom: 16px;
    font-size: 42px;
    text-indent: 16px;
  }

  p {
    font-size: 20px;
    text-indent: 16px;
    text-align: justify;
  }
`
const InfoBanner = styled.div`
  display: flex;
  flex: 1;
  min-height: 450px;

  background-position: 50% 50%;
  background-size: auto 100%;
  background-image: url('/images/code.jpg');
`

const Atuacao = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;

  h2 {
    width: 100%;
    text-align: center;
    font-size: 54px;
    margin-bottom: 16px;
  }
`
const AtuacaoList = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const AtuacaoItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.half ? "50%" : "33.33%"};
  height: 200px;
  padding: 8px;

  background-position: 50% 50%;
  background-size: 100% auto;

  strong {
    font-size: 24px;
    color: #F5F5F5;
    text-align: center;
  }
`

export default function Article({ course }) {
  return (
    <>
      <Head>
        <title>{course.name}</title>
      </Head>

      <Menu />

      <Container>
        <Banner style={{ backgroundImage: `url(${course.image})` }}>
          <h1>{course.name}</h1>
          <p>{course.description}</p>
          <BannerInfo>
            <BannerItem>
              <CalendarDay width={64} height={64} fill="black" />
              <strong>10 Semestres</strong>
            </BannerItem>
            <BannerItem>
              <UserGraduate width={64} height={64} fill="black" />
              <strong>Bacharelado</strong>
            </BannerItem>
          </BannerInfo>
        </Banner>

        <Info>
          <InfoDetails>
            <h2>Sobre o curso</h2>
            <p>O profissional formado em Engenharia da Computação é capaz de projetar e construir hardware e software. O hardware consiste na parte física do computador, suas estruturas e componentes e seus periféricos (como teclado, mouse e monitor). Nessa área, o engenheiro de computação faz a integração de circuitos eletrônicos da máquina e desenvolve placas de ligação entre o equipamento e seus acessórios.</p>
            <p>Na área de desenvolvimento de software o engenheiro da computação cria programas de computadores e aplicativos para os mais diversos fins.</p>
            <br />
            <i>Fonte: Guia da Carreira</i>
          </InfoDetails>
          <InfoBanner />
        </Info>

        <Atuacao>
          <h2>Atuação</h2>
          <AtuacaoList>
            <AtuacaoItem style={{ backgroundImage: `url('/images/computacao.jpg')`}} half>
              <strong>Redes e Infraestrutura</strong>
            </AtuacaoItem>
            <AtuacaoItem style={{ backgroundImage: `url('/images/code-dark.jpg')`}} half>
              <strong>Análise de Requisitos</strong>
            </AtuacaoItem>
            <AtuacaoItem style={{ backgroundImage: `url('/images/code-dark.jpg')`}}>
              <strong>Desenvolvimento de Software</strong>
            </AtuacaoItem>
            <AtuacaoItem style={{ backgroundImage: `url('/images/engenharia.jpg')`}}>
              <strong>Inteligência Artificial</strong>
            </AtuacaoItem>
            <AtuacaoItem style={{ backgroundImage: `url('/images/computacao.jpg')`}}>
              <strong>Análise de Requisitos</strong>
            </AtuacaoItem>
          </AtuacaoList>
        </Atuacao>
      </Container>
    </>
  )
}

export async function getStaticProps({ params }) {
  const course = getCoursesBySlug(params.id, [
    'name',
    'image',
    'description'
  ])
  const content = await markdownToHtml(course.content || '')

  return {
    props: {
      course: {
        ...course,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const course = getAllCourses(['slug'])

  return {
    paths: course.map((course) => {
      return {
        params: {
          id: course.slug,
        },
      }
    }),
    fallback: false,
  }
}

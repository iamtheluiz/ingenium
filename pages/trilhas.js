import Head from 'next/head'
import Menu from '../components/menu'
import styled from 'styled-components'

import UserGraduate from '../public/images/user-graduate-solid.svg';

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
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 1000px;
  width: 100%;

  p {
    max-width: 800px;
    width: 100%;
  }
`;

const Button = styled.a`
  margin-top: 35px;
  padding: 16px 30px;
  text-decoration: none;
  text-transform: uppercase;
  background-color: white;
  border-radius: 4px;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`

const Categoria = styled.section`
  width: 100%;
  max-width: 1000px;
  box-shadow: 4px 4px 20px 0 rgba(120,135,182,.1);
  border: solid 1px #eff1f9;
  padding: 16px;
  margin: 8px;

  svg {
    border: 2px solid #f16165;
    border-radius: 50%;
    padding: 4px;
    background-color: #f16165;
  }
  path {
    fill: white;
  }

  header {
    display: flex;
    align-items: center;
    width: 100%;
    padding-bottom: 8px;
    border-bottom: 2px solid #f16165;
  }

  div.info {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
    color: #f16165;
  }
  span {
    font-size: 18px;
  }
  strong {
    font-size: 24px;
  }

  div.content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

`

const Trilha = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.3%;
  padding: 24px 8px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;

  strong {
    font-size: 20px;
  }
  span {
    font-size: 16px;
  }
  a {
    margin-top: 8px;
    width: 100%;
    padding: 12px 30px;
    text-decoration: none;
    text-transform: uppercase;
    background-color: white;
    border-radius: 4px;
    background-color: #EEE;
    color: black;
    transition: 0.2s all;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
  }
  a:hover {
    background-color: #CCC;
  }
`

export default function Article() {
  return (
    <>
      <Head>
        <title>Trilhas | Ingenium</title>
      </Head>

      <Menu />

      <Container>
        <Banner style={{ backgroundImage: `url(/images/code-dark.jpg)` }}>
          <BannerInfo>
            <h1>Trilhas de Conhecimento</h1>
            <p>Aqui você pode encontrar diversas aulas a materiais complementares sobre diferentes tópicos que estão presentes nos cursos de engenharia.</p>
            <Button href="#trilhas">Começar!</Button>
          </BannerInfo>
        </Banner>

        <Body id="trilhas">
          <Categoria>
            <header>
              <UserGraduate width={64} height={64} />
              <div className="info">
                <span>Trilhas para</span>
                <strong>ENADE</strong>
              </div>
            </header>
            <div className="content">
              <Trilha>
                <strong>Pré-Calculo</strong>
                <span>8 aulas</span>
                <a href="#!">Acessar!</a>
              </Trilha>
              <Trilha>
                <strong>Revisão de Cálculo I</strong>
                <span>10 aulas</span>
                <a href="#!">Acessar!</a>
              </Trilha>
              <Trilha>
                <strong>Revisão de Cálculo II</strong>
                <span>20 aulas</span>
                <a href="#!">Acessar!</a>
              </Trilha>
            </div>
          </Categoria>
          
          <Categoria>
            <header>
              <UserGraduate width={64} height={64} />
              <div className="info">
                <span>Trilhas de</span>
                <strong>Tecnologia</strong>
              </div>
            </header>
            <div className="content">
              <Trilha>
                <strong>Pré-Calculo</strong>
                <span>8 aulas</span>
                <a href="#!">Acessar!</a>
              </Trilha>
              <Trilha>
                <strong>Revisão de Cálculo I</strong>
                <span>10 aulas</span>
                <a href="#!">Acessar!</a>
              </Trilha>
              <Trilha>
                <strong>Revisão de Cálculo II</strong>
                <span>20 aulas</span>
                <a href="#!">Acessar!</a>
              </Trilha>
            </div>
          </Categoria>
        </Body>
      </Container>
    </>
  )
}

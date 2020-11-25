import Head from 'next/head'
import Menu from '../components/menu'
import Link from 'next/link'
import styled from 'styled-components'
import { getAllCourses } from '../lib/courses'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  padding: 8px 32px;
  padding-top: 84px;
  margin: 0 auto;
`

const Title = styled.h1`
  width: 100%;
  text-align: center;
`

const Content = styled.div`
  display: initial;
  padding: 8px 0px;

  img {
    width: 300px;
    float: left;
    margin: 0px 6px;
  }
  div.right {
    flex: 1;
    height: 100%;
    padding: 8px;
  }

  p {
    font-size: 21px;
    margin: 6px;
  }
`

const List = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
`

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  width: calc((100% / 3) - 8px);
  height: 160px;
  margin: 4px;

  cursor: pointer;
  background-color: #CCC;
  color: white;

  div.content {
    padding: 4px;
    text-align: center;
    z-index: 50;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div.content strong {
    font-size: 22px;
  }

  div.image {
    width: 100%;
    height: 100%;
    background-size: 110% auto;
    background-position: 50% 50%;

    filter: opacity(100%) brightness(0.5);
  }
`

export default function Article({ allCourses }) {
  return (
    <>
      <Head>
        <title>Engenharias | Ingenium</title>
      </Head>

      <Menu />

      <Container>
        <Title>Engenharia</Title>
        <Content>
          <img src="/images/engenharia.jpg" alt="Engenharia" />
          <p>Engenharia é a aplicação do conhecimento científico, econômico, social e prático, com o intuito de inventar, desenhar, construir, manter e melhorar estruturas, máquinas, aparelhos, sistemas, materiais e processos. É também profissão em que se adquire e se aplicam os conhecimentos matemáticos e técnicos na criação, aperfeiçoamento e implementação de utilidades que realizem uma função ou objetivo.</p>
          <p>Nos processos de criação, aperfeiçoamento e complementação, a engenharia conjuga os vários conhecimentos especializados no sentido de viabilizar as utilidades, tendo em conta a sociedade, a técnica, a economia e o meio ambiente.</p>
        </Content>
        <List>
          {allCourses.map(item => (
            <Link key={item.slug} href={`/engenharia/${item.slug}`}>
              <Item>
                  <div className="content">
                    <strong>{item.name}</strong>
                    <p>{item.tag}</p>
                  </div>
                  <div className="image" style={{ backgroundImage: `url(${item.image})` }}></div>
              </Item>
            </Link>
          ))}
        </List>
    </Container>
    </>
  )
}

export async function getStaticProps() {
  const allCourses = getAllCourses([
    'slug',
    'name',
    'tag',
    'image'
  ])

  return {
    props: { allCourses },
  }
}

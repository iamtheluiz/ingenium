import Head from 'next/head'
import Menu from '../components/menu'
import Footer from '../components/footer'
import Date from '../components/date'
import Link from 'next/link'
import styled from 'styled-components'
import { getAllPosts } from '../lib/api'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 32px;
  padding-top: 84px;
`

const List = styled.ul`
  list-style: none;
  padding: 0;

  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`

const Item = styled.li`
  display: flex;
  flex-direction: row-reverse;
  margin: 0 0 1.25rem;
  border-top: 1px solid rgba(0,0,0,.0785);
  padding: 16px 0px;
`

const Left = styled.div`
  display: flex;
  align-items: center;
`

const Image = styled.div`
  width: 300px;
  height: 170px;
  border-radius: 4px;

  background-size: 100% auto;
  background-position: 50% 50%;
  background-repeat: repeat;
`;

const Right = styled.div`
  padding-right: 16px;
  flex: 1;

  a {
    color: #0070f3;
    text-decoration: none;
    font-size: 26px;
    line-height: 1.5;
  }

  p {
    font-size: 18px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px!important;
  }

  div img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 8px;
  }

  div small {
    font-size: 15px;
  }

  @media (max-width: 650px) {

  }
`

export default function Article({ allPosts }) {
  return (
    <>
      <Head>
        <title>Article | Ingenium</title>
      </Head>

      <Menu />

      <Container>
        <List>
          <h1>Artigos</h1>
          {allPosts.map(post => (
            <Item key={post.slug}>
              <Left>
                <Image style={{ backgroundImage: `url(${post.cover})` }} />
                {/* <img src={post.cover} alt="Post Cover"/> */}
              </Left>
              <Right>
                <Link href={`artigo/${post.slug}`}>{post.title}</Link><br />
                <p>{post.description}</p>
                <div>
                  <img src={post.author.picture} alt="Author Image" />
                  <small>
                    {post.author.name},<br /><Date dateString={post.date} />
                  </small>
                </div>
              </Right>
            </Item>
          ))}
        </List>
      </Container>

      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'slug',
    'title',
    'description',
    'author',
    'date',
    'cover'
  ])

  return {
    props: { allPosts },
  }
}

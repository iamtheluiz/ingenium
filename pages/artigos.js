import Head from 'next/head'
import Menu from '../components/menu'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  padding: 8px 32px;
  padding-top: 70px;
`

export default function Article() {
  return (
    <>
      <Head>
        <title>Article | Ingenium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <Container>
        <ul>
          <li>
            <Link href="/artigo/hello">Hello</Link>
          </li>
        </ul>
      </Container>
    </>
  )
}

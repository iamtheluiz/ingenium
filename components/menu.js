import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: 0;
  z-index: 5;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 54px;
  padding: 4px 8px;

  background-color: #000000;

  > a, img {
    width: auto;
    height: 100%;
  }
  ul {
    color: white;
    list-style: none;
    display: flex;
    flex-direction: row;
  }
  ul li a {
    padding: 8px 8px;
    text-decoration: none;
    color: white;
  }
`;

export default function Menu() {
  return (
    <Container>
      <Link href="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Google_Lens_-_new_logo.png/600px-Google_Lens_-_new_logo.png" alt="" />
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/artigos">Artigos</Link>
          </li>
          <li>
            <Link href="/engenharias">Engenharias</Link>
          </li>
          <li>
            <Link href="/trilhas">Trilhas</Link>
          </li>
          <li>
            <Link href="/sobre">Sobre</Link>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
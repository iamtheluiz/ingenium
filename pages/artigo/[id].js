import Head from 'next/head'
import Menu from '../../components/menu'
import styled from 'styled-components'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/mdToHtml'

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 8px 32px;
  padding-top: 70px;

  /*! Typebase.less v0.1.0 | MIT License */
  /* Setup */
  article {
    /* Change default typefaces here */
    font-size: 137.5%;
    width: 100%;
    max-width: 780px;
  }

  div,
  table,
  p,
  img{
    width: 100%;
  }

  table th,
  table td {
    padding: 0.5em 0.5em;
  }

  /* Copy & Lists */
  p, center {
    line-height: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 0;
  }

  ul,
  ol {
    padding-left: 24px;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  ul li,
  ol li {
    line-height: 1.5rem;
  }

  ul ul,
  ol ul,
  ul ol,
  ol ol {
    margin-top: 0;
    margin-bottom: 0;
  }

  blockquote {
    line-height: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-family: "Playfair Display", serif !important;
    font-size: 30px;
    font-style: italic;
    letter-spacing: -0.36px;
    overflow-wrap: break-word;
    border-left: 2px rgba(0, 0, 0, 0.68) solid;
    /* text-align: center; */
    padding: 0 0 0 50px;
  }

  /* Headings */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    /* Change heading typefaces here */
    font-family: sans-serif;
    margin-top: 1.5rem;
    margin-bottom: 0;
    line-height: 1.5rem;
    width: 100%;
  }

  h1 {
    font-size: 4.242rem;
    line-height: 4.5rem;
  }

  h2 {
    font-size: 2.828rem;
    line-height: 3rem;
  }

  h3 {
    font-size: 1.414rem;
  }

  h4 {
    font-size: 0.707rem;
  }

  h5 {
    font-size: 0.4713333333333333rem;
  }

  h6 {
    font-size: 0.3535rem;
  }

  /* Code blocks */
  code {
    vertical-align: bottom;
  }

  /* Leading paragraph text */
  .lead {
    font-size: 1.414rem;
  }

  /* Hug the block above you */
  .hug {
    margin-top: 0;
  }

  @media(max-width: 800px) {
    padding: 8px 12px;
    padding-top: 70px;

    h1 {
      font-size: 3rem;
      line-height: 3rem;
      margin-top: 8px;
    }
  }
`

const Header = styled.header`
  h1 {
    margin-bottom: 4px;
  }

  div#profile {
    display: flex;
    flex-direction: row;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  div#profile img {
    width: 64px;
    height: 64px;
    border-radius: 32px;
  }
  div#profile div.details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 8px;
  }
`

export default function Article({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <ArticleContainer>
        <article>
          <Header>
            <h1>{post.title}</h1>
            <span className="description">{post.description}</span>
            <div id="profile">
              <img
                src={post.author.picture}
                alt="Profile Picture" />
              <div className="details">
                <strong>{post.author.name}</strong>
                <span>{post.author.description}</span>
              </div>
            </div>
          </Header>
          <img src={post.cover} className="cover" />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </ArticleContainer>
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.id, [
    'title',
    'description',
    'author',
    'cover',
    'content'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          id: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

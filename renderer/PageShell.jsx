import m from 'mithril'
import logo from './logo.svg'
import './PageShell.css'
// import { PageContextProvider } from './usePageContext'
import { Link } from './Link'
import { PageContext } from './usePageContext'

const PageShell = ({ attrs: { pageContext } }) => {
  PageContext.set(pageContext)
  return {
    view: ({ children }) => {
      return (
        <Layout>
          <Sidebar />
          <Content>
            {children}
          </Content>
        </Layout>
      )
    }
  }
}

const Layout = {
  view: ({ children }) => (
    <div
      style={{
        display: 'flex',
        maxWidth: 900,
        margin: 'auto'
      }}
    >
      {children}
    </div>
  )
}

const Sidebar = {
  view: ({ children }) => (
    <div
      style={{
        padding: '20px',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: '1.8em'
      }}
    >
      <Logo />
      <Link className='navitem' href='/'>
        Home
      </Link>
      <Link className='navitem' href='/about'>
        About
      </Link>
      <Link className='navitem' href='/star-wars'>
        Star Wars
      </Link>
    </div>
  )
}

const Content = {
  view: ({ children }) => (
    <div
      style={{
        padding: '20px',
        paddingBottom: '50px',
        borderLeft: '2px solid #eee',
        minHeight: '100vh'
      }}
    >
      {children}
    </div>
  )
}

const Logo = () => {
  return {
    view: () => (
      <div
        style={{
          marginTop: 20,
          marginBottom: 10
        }}
      >
        <a href='/'>
          <img src={logo} height={64} width={64} alt='logo' />
        </a>
      </div>
    )
  }
}

export { PageShell, Layout, Sidebar, Logo, Link, Content }

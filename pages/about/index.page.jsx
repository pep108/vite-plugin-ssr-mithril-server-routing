import m from 'mithril'
import './code.css'

function Page () {
  return {
    view: () => (
      <>
        <h1>About</h1>
        <p>
          Example of using <code>vite-plugin-ssr</code>.
        </p>
      </>
    )
  }
}

export { Page }

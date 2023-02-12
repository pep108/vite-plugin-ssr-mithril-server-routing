import m from 'mithril'

import { Counter } from './Counter'

const Page = () => {
  return {
    view: () => {
      return (
        <>
          <h1>Welcome</h1>
          This page is:
          <ul>
            <li>Rendered to HTML.</li>
            <li>
              Interactive. <Counter />
            </li>
          </ul>
        </>
      )
    }
  }
}

export { Page }

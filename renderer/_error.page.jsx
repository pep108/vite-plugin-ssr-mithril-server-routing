import m from 'mithril'

export { Page }

function Page ({ attrs: { is404 } }) {
  if (is404) {
    return {
      view: () => (
        <>
          <h1>404 Page Not Found</h1>
          <p>This page could not be found.</p>
        </>
      )
    }
  }

  return {
    view: () => (
      <>
        <h1>500 Internal Server Error</h1>
        <p>Something went wrong.</p>
      </>
    )
  }
}

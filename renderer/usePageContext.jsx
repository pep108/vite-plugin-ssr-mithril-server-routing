// `usePageContext` allows us to access `pageContext` in any Mithril component.
// See https://vite-plugin-ssr.com/pageContext-anywhere

const PageContext = (() => {
  let _store = {}

  const set = data => { _store = data }

  return {
    value: () => _store,
    set
  }
})()

function usePageContext () {
  return PageContext.value()
}

export { PageContext, usePageContext }

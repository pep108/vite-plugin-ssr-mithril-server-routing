import m from 'mithril'
import { usePageContext } from './usePageContext'

export { Link }

function Link ({ attrs, children }) {
  const pageContext = usePageContext()
  const className = [attrs.className, pageContext.urlPathname === attrs.href && 'is-active'].filter(Boolean).join(' ')

  return {
    view: () => (
      <a {...attrs} className={className}>{children}</a>
    )
  }
}

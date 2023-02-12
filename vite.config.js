import ssr from 'vite-plugin-ssr/plugin'

export default {
  esbuild: {
    jsxFactory: 'm',
    jsxFragment: 'm.Fragment'
  },
  plugins: [ssr()]
}

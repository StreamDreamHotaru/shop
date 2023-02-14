import Icon from './index.vue'

const req = require.context('@/assets/svg', false, /\.svg$/)
req.keys().forEach((fil) => {
  require('@/assets/svg' + fil.replace('.', ''))
})
export default (Vue: { component: (arg0: string, arg1: unknown) => void }) => {
  // eslint-disable-next-line vue/multi-word-component-names
  Vue.component('Icon', Icon)
}

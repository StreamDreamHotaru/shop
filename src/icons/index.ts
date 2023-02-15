import Icon from './index.vue'
// import vue from 'vue'
const req = require.context('@/assets/svg', false, /\.svg$/)
req.keys().forEach((fil) => {
  require('@/assets/svg' + fil.replace('.', ''))
})
// export default () => {
//   // eslint-disable-next-line vue/multi-word-component-names
//   // console.log(Vue)
//   vue.component('icon-svg', Icon)
// }
export default Icon

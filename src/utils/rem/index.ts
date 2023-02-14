const baseSize = 100
const windowMinWidth = 375
const size = () => {
  const windowMaxWidth = window.innerWidth
  document.documentElement.style.fontSize =
    (windowMaxWidth / windowMinWidth) * baseSize + 'px'
}
size()
window.addEventListener(
  'resize',
  () => {
    size()
  },
  false
)

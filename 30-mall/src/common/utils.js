export let debounce = (func, delay) => {
  let timer = null
  return (...args) => {
    if (timer) {
      clearInterval(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
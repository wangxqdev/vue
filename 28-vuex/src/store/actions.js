export default {
  ['aUpdateInfo'](context, message) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(message)
        context.commit('updateInfo')
        resolve('aaa')
      }, 1000)
    })
  }
}
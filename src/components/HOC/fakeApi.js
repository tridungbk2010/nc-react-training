export const getData = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('a value')
  }, 2000)
});

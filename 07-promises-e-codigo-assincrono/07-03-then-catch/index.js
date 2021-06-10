const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('123')
  }, 5000);
})
export default ms =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(true);
    }, ms),
  );

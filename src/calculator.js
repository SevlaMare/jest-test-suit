const calculator = (() => {
  const sum = (...args) => args.reduce((a, b) => (a + b));

  const sub = (...args) => args.reduce((a, b) => (a - b));

  const div = (...args) => args.reduce((a, b) => (a / b));

  const mult = (...args) => args.reduce((a, b) => (a * b));

  return {
    sum, sub, div, mult,
  };
})();

// export {sum, sub, dib, mult}
export default calculator;

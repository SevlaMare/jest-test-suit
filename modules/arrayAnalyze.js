const analyze = (arr) => {
  const avg = arr.reduce((a, b) => (a + b)) / arr.length;
  const len = arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {
    avg, len, min, max,
  };
};

export default analyze;
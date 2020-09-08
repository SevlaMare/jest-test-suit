const analyze = (arr) => ({
  avg: arr.reduce((a, b) => (a + b)) / arr.length,
  len: arr.length,
  min: Math.min(...arr),
  max: Math.max(...arr),
});

export default analyze;
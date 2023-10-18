const getVwCoords = (value) => {
  const width = window.innerWidth;
  return (value / width * 100).toFixed(2)
};

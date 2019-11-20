export const getRandomColor = () => {
  const options = '0123456789ABCDEF';
  return `#${Array.from(
    Array(6),
    () => options[Math.floor(Math.random() * options.length)],
  ).join('')}`;
};

const getRandomNumber = (min, max) => {
  // https://learn.javascript.ru/task/random-int-min-max
  if (max < min) {
    return;
  }
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

getRandomNumber(5, 75);

export { getRandomNumber };

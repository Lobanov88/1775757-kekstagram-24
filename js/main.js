function getRandomNumber(min, max) {
  // https://learn.javascript.ru/task/random-int-min-max
  if (max < min) {
    console.log('Неправильно задан интервал. Первое число должно быть меньше.');
    return;
  }
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

getRandomNumber(5, 75);

function checkLength(checkString, maxLength) {
  if (checkString.length > maxLength) {
    console.log('Слишком много текста');
    return;
  }
  console.log('Длина текста в порядке');
  return;
}

const exampleText = 'слишком длинный текст';

checkLength(exampleText, 6);

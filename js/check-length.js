const checkLength = (checkString, maxLength) => checkString.length < maxLength;

const exampleText = 'слишком длинный текст';

checkLength(exampleText, 6);

export { checkLength };

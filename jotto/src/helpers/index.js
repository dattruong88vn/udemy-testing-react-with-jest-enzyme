export const getMatchingCountLetter = (guessesWord, secretWord) => {
  const secretLetters = secretWord.split("");
  const guessesLetterSet = new Set(guessesWord);

  return secretLetters.filter((letter) => guessesLetterSet.has(letter)).length;
};

import { GAME_STARTED } from "./game-states";

const gameStateFactory = {
  newGame: (word) => {
    const gameWord = word;
    return {
      word: gameWord,
      letters: gameWord.split("").map((letter) => ({
        value: letter,
        guessed: false,
      })),
      guesses: 5,
      gameState: GAME_STARTED,
      pastGuesses: [],
    };
  },
};

export default gameStateFactory;

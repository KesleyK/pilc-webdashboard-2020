export const GAME_OVER = Symbol("OVER");
export const GAME_STARTED = Symbol("BEGIN");
export const GAME_WON = Symbol("WIN");

const gameStates = {
  GAME_WON,
  GAME_OVER,
  GAME_STARTED,
};

export default gameStates;

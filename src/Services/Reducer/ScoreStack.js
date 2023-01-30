import { startStack } from "../Action/ScoreStack";
import { addScore } from "../Types";

const initalState = {
  players: [],
};

export const ScoreStackReducer = (state = initalState, action) => {
  switch (action.type) {
    case startStack:
      state.players.push(action.payLoad);
      return {
        ...state,
        players: state.players,
      };

    case addScore:
      state.players[action.payLoad.index].score.push(action.payLoad.score);
      return {
        ...state,
        players: state.players,
      };

    default:
      return state;
  }
};

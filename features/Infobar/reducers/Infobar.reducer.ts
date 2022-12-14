import { defaultInfobar } from "../contexts/Infobar.context";
import { IInfobarAction, IInfobarState } from "../types";

const reducer = (state: IInfobarState, action: IInfobarAction) => {
  switch (action.type) {
    case "RESET":
      return defaultInfobar;
    case "TIME_UP":
      return { ...state, timeUp: true, isNewHighscore: action.isNewHighscore };
    case "DECREMENT_TRIES":
      return { ...state, triesLeft: state.triesLeft - 1 };
    case "CORRECT_COLOR":
      return {
        ...state,
        score: state.score + action.score!,
        correctColors: state.correctColors + 1,
        triesLeft: defaultInfobar.triesLeft,
      };
    case "RESET_TRIES":
      return {
        ...state,
        triesLeft: defaultInfobar.triesLeft,
      };
    default:
      return state;
  }
};
export default reducer;

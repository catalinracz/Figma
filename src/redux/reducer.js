import SIGNUP from "./actionTypes";

const INITIAL_STATE = {
  result: "initialResult",
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP:
      const nextState = { ...state, token: action.payload };
      return nextState;
    default:
      return state;
  }
};

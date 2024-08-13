import { SET_SELECTED_CHARACTERS } from "../actionTypes";

const initialState = {
  characterOne: null,
  characterTwo: null,
  messageOne: "",
  messageTwo: "",
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_CHARACTERS:
      return {
        ...state,
        characterOne: action.payloadOne,
        characterTwo: action.payloadTwo,
      };
    default:
      return state;
  }
};

export default homeReducer;

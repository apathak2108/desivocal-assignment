import axios from "axios";
import {
  GET_AUDIO_OF_CONVERSATIONAL_MESSAGE_FAILURE,
  GET_AUDIO_OF_CONVERSATIONAL_MESSAGE_REQUEST,
  SET_EDITTED_MESSAGE_OF_CHARACTER_ONE,
  SET_EDITTED_MESSAGE_OF_CHARACTER_TWO,
  SET_SELECTED_CHARACTERS,
} from "../actionTypes";

export const setSelectedCharacters = (characterOne, characterTwo) => ({
  type: SET_SELECTED_CHARACTERS,
  payloadOne: characterOne,
  payloadTwo: characterTwo,
});

export const setEdittedMessageOfCharacterOne = (message) => ({
  type: SET_EDITTED_MESSAGE_OF_CHARACTER_ONE,
  payload: message,
});

export const setEdittedMessageOfCharacterTwo = (message) => ({
  type: SET_EDITTED_MESSAGE_OF_CHARACTER_TWO,
  payload: message,
});

export const getAudioOfConversationalMessage = (message) => {
  return async (dispatch) => {
    dispatch({ type: GET_AUDIO_OF_CONVERSATIONAL_MESSAGE_REQUEST });
    try {
      const headers = {
        Accept: "application/json",
        Authorization: "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",
        "Content-Type": "application/json",
      };
      const body = {
        inputs: {
          text: message,
          language: "en",
          model_id: "3ccb64b4-8a8b-4abe-ab73-40a2ea307b08",
        },
      };
      const URL =
        "https://ezmh9t6vbvhitgly.us-east-1.aws.endpoints.huggingface.cloud";
      const response = await axios.post(URL, body, headers);
      
    } catch (error) {
      dispatch({
        type: GET_AUDIO_OF_CONVERSATIONAL_MESSAGE_FAILURE,
        error: error.message,
      })
    }
  };
};

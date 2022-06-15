const GET_GREETINGS = 'redux/greetings/GET_GREETINGS';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

export const getGreetings = (payload) => ({
  type: GET_GREETINGS,
  payload,
});

const url = 'http://127.0.0.1:3000';

export const getGreetingsFromAPI = async () => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export default reducer;

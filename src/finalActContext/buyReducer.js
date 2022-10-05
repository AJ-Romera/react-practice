import types from "./types";

const buyReducer = (state = [], action) => {
  switch (action.type) {
    case types.buy:
      return [
        ...state,
        { name: action.payload.name, price: action.payload.price },
      ];

    case types.cancel:
      return state.filter((place) => place.name !== action.payload.name);

    default:
      return state;
  }
};

export default buyReducer;

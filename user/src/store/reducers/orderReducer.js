const INITIAL_STATE = [];

export default function orderReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      const arr = state.filter((med) => med.id !== action.payload);
      return arr;
    default:
      return state;
  }
}

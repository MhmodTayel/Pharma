const INITIAL_STATE = [];

export default function orderReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      const arr = state.filter((med) => med.id !== action.payload);
      return arr;
    case "EDIT_QUANTITY":
      const med = state.find((med)=> med.id == action.payload.id)
      med.reqQuantity += action.payload.quantity;
      return [...state];
    default:
      return state;
  }
}

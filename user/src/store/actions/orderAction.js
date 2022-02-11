export const addMedOrderAction = (payload) => {
  return {
    type: "ADD",
    payload,
  };
};

export const removeMedOrderAction = (payload) => {
  return {
    type: "REMOVE",
    payload,
  };
};

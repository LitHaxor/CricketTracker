export const addScore = (a) => {
  return {
    type: addScore,
    payLoad: a,
  };
};

export const startStack = (a) => {
  return {
    type: startStack,
    payLoad: a,
  };
};

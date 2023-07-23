const drawCondition = (state) => {
  for (let i = 0; i < state.length; i++) {
    if (state[i] == null) {
      return false;
    }
  }
  return true;
};
export default drawCondition ;

const generateState = knobs => {
  const state = [];
  Object.values(knobs).map(knob =>
    knob.map(curr => {
      state[curr.state] = curr.defaultState;
      return state;
    }),
  );
  return state;
};

export default generateState;

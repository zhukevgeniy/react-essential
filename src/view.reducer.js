const initialState = {
  color: "black"
};

const ViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@@view/COLOR_CHANGE": {
      return {
        ...state,
        color: state.color === "black" ? "pink" : "black"
      };
    }

    default: {
      return state;
    }
  }
};

export default ViewReducer;

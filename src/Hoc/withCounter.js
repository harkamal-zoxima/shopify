import React from "react";
import { createStore } from "redux";

const UpdatedComp = (OldComp) => {
  const NewComp = () => {
    const ADD_PRODUCT = "ADD_PRODUCT";
    const DELETE_PRODUCT = "DELETE_PRODUCT";

    const addFunction = () => {
      return {
        type: ADD_PRODUCT,
        info: "Just to add the product",
      };
    };

    const deleteFunction = () => {
      return {
        type: DELETE_PRODUCT,
        info: "Just to remove the product",
      };
    };

    const initialState = {
      count: 0,
      payload: "anything",
    };

    const reducer = (state = initialState, action) => {
      console.log(state);

      switch (action.type) {
        case ADD_PRODUCT:
          return { ...state, count: state.count + 1 };

        case DELETE_PRODUCT:
          if(state.count > 0) return { ...state, count: state.count - 1 };

        default:
          return state;
      }
    };

    const store = createStore(reducer);

    // store.subscribe(() => console.log(store.getState()));

    return (
      <OldComp
        count={store.getState().count}
        incrementCount={() => store.dispatch(addFunction())}
        decrementCount={() => store.dispatch(deleteFunction())}
      />
    );
  };
  return NewComp;
};

export default UpdatedComp;

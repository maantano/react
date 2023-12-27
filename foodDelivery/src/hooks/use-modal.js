import { useReducer } from "react";

const initialState = {
  show: false,
};

const modalShowStateReducer = (state, action) => {
  if (action.type === "SHOW") {
    return {
      show: action.show,
    };
  }
  if (action.type === "HIDE") {
    return {
      show: action.show,
    };
  }
  return modalShowStateReducer;
};

const useModal = () => {
  const [showState, dispatch] = useReducer(modalShowStateReducer, initialState);
  const modalShow = (e) => {
    dispatch({ type: "SHOW", show: true });
  };
  const modalHide = (e) => {
    dispatch({ type: "HIDE", show: false });
  };
  return {
    show: showState.show,
    modalShow,
    modalHide,
  };
};

export default useModal;

import { useReducer } from "react";
const useInput = (checks) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "setError":
        return {
          value: state.value,
          error: action.error,
        };
      case "reset":
        return initialState;
      case "setValue":
        return {
          value: action.value,
          error: "",
        };
        
    }
  };

  const initialState = {
    value: "",
    error: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};

export default useInput;

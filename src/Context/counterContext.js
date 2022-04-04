import React, { createContext, useContext, useReducer } from "react";

const CounterContext = createContext();
const useCounter = () => useContext(CounterContext);

const CounterProvider = ({ children }) => {
  function reducer(state, action) {
    switch (action.type) {
      case "increment": {
        return { count: state.count + 1 };
      }
      case "decrement": {
        if (state.count < 1) {
          return state;
        }
        return { count: state.count - 1 };
      }
      default:
        return state;
    }
  }
  const [state, dispatcher] = useReducer(reducer, { count: 1 });
  return (
    <CounterContext.Provider value={{ state, dispatcher }}>
      {children}
    </CounterContext.Provider>
  );
};
export { useCounter, CounterProvider };

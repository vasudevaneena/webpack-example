import React from "react";
import Container from "./container/Container";
import { Provider } from "react-redux";
import store from "../store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
};

export default App;

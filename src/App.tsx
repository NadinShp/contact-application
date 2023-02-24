import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import RoutesApp from "./routes/Routes";
import "modern-normalize/modern-normalize.css";

const App = () => (
  <Provider store={store}>
    <RoutesApp />
  </Provider>
);
export default App;

import React from "react";
import reducers from "../src/List/redux/reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducers);

export default function ProviderWrap({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}

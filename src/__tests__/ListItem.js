import React from "react";
import { render } from "react-testing-library";
import ListItem from "../List/components/ListItem";

import reducers from "../List/redux/reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducers);

const props = {
  item: {
    id: 1,
    text: "test"
  },
  removeItem: () => {}
};

test("renders", () => {
  const { getByText } = render(
    <Provider store={store}>
      <ListItem {...props} />
    </Provider>
  );
  const node = getByText("test");

  expect(node).toHaveTextContent("test");
});

import React from "react";
import { render } from "react-testing-library";
import List from "../List/components/List";
import ProviderWrap from "../../test/ProviderWrap";

test("renders", () => {
  const { container } = render(
    <ProviderWrap>
      <List />
    </ProviderWrap>
  );

  expect(container).not.toBeNull;
});

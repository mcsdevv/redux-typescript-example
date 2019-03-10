import React from "react";
import { render } from "react-testing-library";
import { axe } from "jest-axe";
import ListAdd from "../List/components/ListAdd";
import ProviderWrap from "../../test/ProviderWrap";

test("renders", () => {
  const { getByLabelText } = render(
    <ProviderWrap>
      <ListAdd />
    </ProviderWrap>
  );

  const node = getByLabelText(/add an item/i);

  expect(node.placeholder).not.toBeNull;
  expect(node.placeholder).toBe("...");
});

test("element is accessible", async () => {
  const { container } = render(
    <ProviderWrap>
      <ListAdd />
    </ProviderWrap>
  );

  const results = await axe(container.innerHTML);

  expect(results).toHaveNoViolations();
});

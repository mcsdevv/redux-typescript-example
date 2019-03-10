import React from "react";
import { fireEvent, render } from "react-testing-library";
import ListItem from "../List/components/ListItem";
import ProviderWrap from "../../test/ProviderWrap";

const props = {
  item: {
    id: "1",
    text: "test"
  }
};

test("renders", () => {
  const { getByText } = render(
    <ProviderWrap>
      <ListItem {...props} />
    </ProviderWrap>
  );

  const node = getByText(props.item.text);

  expect(node).toHaveTextContent(props.item.text);
});

test("renders without props", () => {
  const { container } = render(
    <ProviderWrap>
      <ListItem />
    </ProviderWrap>
  );

  expect(container).not.toThrow;
});

// test("removeItem fires", () => {
//   const removeItemMock = jest.fn();
//   const { getByTestId } = render(
//     <ProviderWrap>
//       <ListItem {...props} removeItem={removeItemMock} />
//     </ProviderWrap>
//   );

//   const node = getByTestId("trash");
//   fireEvent.click(node);

//   expect(removeItemMock).toHaveBeenCalledTimes(1);
//   expect(removeItemMock).toHaveBeenCalledWith(props.item.id);
// });

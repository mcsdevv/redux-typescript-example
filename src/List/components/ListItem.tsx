import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { Item } from "../redux/types";
import { removeItem } from "../redux/actions";

interface ListItemDispatchProps {
  removeItem: typeof removeItem;
}

interface ListItemProps extends ListItemDispatchProps {
  item: Item;
}

function ListItem({ item, removeItem }: ListItemProps) {
  return (
    <div>
      <p>{item.text}</p>
      <p onClick={() => removeItem(item.id)}>{item.id}</p>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch): ListItemDispatchProps => ({
  removeItem: id => dispatch(removeItem(id))
});

export default connect(
  null,
  mapDispatchToProps
)(ListItem);

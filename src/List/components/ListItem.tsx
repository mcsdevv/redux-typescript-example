import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { Item } from "../redux/types";
import { removeItem } from "../redux/actions";

import { Trash2 } from "react-feather";

import styles from "../styles/ListItem.module.scss";

interface ListItemDispatchProps {
  removeItem: typeof removeItem;
}

interface ListItemProps extends ListItemDispatchProps {
  item: Item;
}

function ListItem({ item, removeItem }: ListItemProps) {
  return (
    <div className={styles.item}>
      <p className={styles.text}>{item.text}</p>
      <Trash2 className={styles.icon} onClick={() => removeItem(item.id)}>
        {item.id}
      </Trash2>
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

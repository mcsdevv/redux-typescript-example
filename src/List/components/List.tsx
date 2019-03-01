import React from "react";
import { connect } from "react-redux";

import { Item, ListStore } from "../redux/types";

import ListAdd from "./ListAdd";
import ListItem from "./ListItem";

import styles from "../styles/List.module.scss";

interface ListMapProps {
  items: Item[];
}

interface ListProps extends ListMapProps {}

function List({ items }: ListProps) {
  return (
    <div className={styles.list}>
      <h1 className={styles.heading}>List</h1>
      <p className={styles.subHeading}>
        Fulfilling all your list requirements.
      </p>
      <ListAdd />
      {items.map(i => (
        <ListItem item={i} key={i.id} />
      ))}
    </div>
  );
}

const mapStateToProps = ({ items }: ListStore): ListMapProps => ({
  items
});

export default connect(
  mapStateToProps,
  null
)(List);

import React from "react";
import { connect } from "react-redux";

import { Item, ListStore } from "../redux/types";

import ListAdd from "./ListAdd";
import ListItem from "./ListItem";

interface ListMapProps {
  items: Item[];
}

interface ListProps extends ListMapProps {}

function List({ items }: ListProps) {
  return (
    <>
      <h1>List</h1>
      <ListAdd />
      {items.map(i => (
        <ListItem item={i} key={i.id} />
      ))}
    </>
  );
}

const mapStateToProps = ({ items }: ListStore): ListMapProps => ({
  items
});

export default connect(
  mapStateToProps,
  null
)(List);

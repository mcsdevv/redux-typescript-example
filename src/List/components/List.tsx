import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import ListAdd from "./ListAdd";

interface ListMapProps {}

interface ListDispatchProps {}

interface ListProps extends ListMapProps, ListDispatchProps {}

function List({  }: ListProps) {
  return (
    <>
      <h1>List</h1>
      <ListAdd />
    </>
  );
}

const mapStateToProps = ({}): ListMapProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): ListDispatchProps => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

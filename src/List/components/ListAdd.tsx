import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { uuidv4 as uuid } from "uuidv4";

import { addItem } from "../redux/actions";

interface ListAddDispatchProps {
  addItem: typeof addItem;
}

interface ListAddProps extends ListAddDispatchProps {}

interface ListAddState {
  text: string;
}

class ListAdd extends React.Component<ListAddProps, ListAddState> {
  constructor(props: ListAddProps) {
    super(props);
    this.state = {
      text: ""
    };
  }
  public render() {
    const { text } = this.state;
    return (
      <div>
        <input onChange={this._handleOnChange} value={text} />
        <button onClick={this._handleSubmit}>Add Item</button>
      </div>
    );
  }
  private _handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value });
  };
  private _handleSubmit = () => {
    this.props.addItem(uuid(), this.state.text);
    this.setState({ text: "" });
  };
}

const mapDispatchToProps = (dispatch: Dispatch): ListAddDispatchProps => ({
  addItem: (id, text) => dispatch(addItem(id, text))
});

export default connect(
  null,
  mapDispatchToProps
)(ListAdd);

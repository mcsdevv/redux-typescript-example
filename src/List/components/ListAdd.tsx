import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import uuidv4 from "uuidv4";

import { addItem } from "../redux/actions";

import styles from "../styles/ListAdd.module.scss";

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
      <form className={styles.form} onSubmit={this._handleSubmit}>
        <input
          className={styles.input}
          onChange={this._handleOnChange}
          placeholder="Add an item..."
          value={text}
        />
        <input className={styles.button} type="submit" value="+" />
      </form>
    );
  }
  private _handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value });
  };
  private _handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.addItem(uuidv4(), this.state.text);
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

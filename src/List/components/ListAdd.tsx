import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface ListAddMapProps {}

interface ListAddDispatchProps {}

interface ListAddProps extends ListAddMapProps, ListAddDispatchProps {}

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
  private _handleSubmit = () => {};
}

const mapStateToProps = ({}): ListAddMapProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): ListAddDispatchProps => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListAdd);

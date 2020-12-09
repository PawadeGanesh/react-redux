import React, { Component } from "react";
import createData from "../action/createAction";
import { connect } from "react-redux";

class Form extends Component {
  state = {
    name: "",
  };

  handleChange = (e) => {
    // e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/");
    this.props.createData(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit" className="btn btn-success m-2">
            Submit
          </button>
          <button
            className="btn btn-success btn-md float-right m-2"
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createData })(Form);

import React, { Component } from "react";
import { connect } from "react-redux";
import getData from "../action/getAction";
import editData from "../action/editAction";

class Edit extends Component {
  state = {
    name: "",
  };

  handleChange = (e) => {
    console.log("value", e.target.value);
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    // this.setState({ value: this.state.name});
    e.preventDefault();
    const id = this.props.match.params.id;
    this.props.history.push("/");
    this.props.editData(id, this.state.name);

    // console.log("state",this.state)
  };

  render() {
    const Data = this.props.newData;
    const id = this.props.match.params.id;

    console.log("getting id", id);

    let name = "";
    console.log("DAta", Data);
    Data &&
      Data.map((detail) => {
        console.log(detail, "detail");
        if (detail._id === id) {
          name = detail.name;
          return name;
        }
        return "";
      });

    console.log("EDIT", Data);
    // const result = Data && Data.map(D => D.name);
    //console.log("EDIT",result);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              defaultValue={name}
              onChange={this.handleChange}
            />
          </label>

          <button
            className="btn btn-success btn-md float-right m-2"
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-success m-2">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect((state) => ({ newData: state.getReducer.state }), {
  getData,
  editData,
})(Edit);

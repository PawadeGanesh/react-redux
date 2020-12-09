import React, { Component } from "react";
import axios from "axios";
// import getData1 from '../action/getAction';

class NewData extends Component {
  state = {
    name: "",
  };

  // handleChange = (e) => {
  //     this.setState({ [e.target.name]: e.target.value })
  // }

  // handleCilck = () => {
  //     this.props.history.push('/get')
  // }

  postData() {
    const obj = {
      name: this.state.name,
    };

    axios
      .post("http://localhost:5000/vidly/api/genres/", obj, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log("POST", res.data);
        this.setState({ name: "" });
        this.props.history.push("/get");
      })
      .catch((err) => console.log(err));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.postData();
  };

  // postData(data){

  // }

  // componentDidMount(){
  //     this.postData();
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="m-5">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ [e.target.name]: e.target.value });
              }}
            />
          </label>
          <button type="submit" className="btn btn-success m-2">
            Submit
          </button>
          <button
            className="btn btn-success btn-md float-right m-2"
            onClick={() => {
              this.props.history.push("/get");
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default NewData;

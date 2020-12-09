import axios from "axios";
// import {EDIT_DATA} from './constant';
import getData from "./getAction";

export default function editData(id, details) {
  return (dispatch) => {
    axios
      .put(
        `http://localhost:5000/vidly/api/genres/${id}`,
        { name: details },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        dispatch(getData());
        // dispatch({type: EDIT_DATA, payload: {id, res}})
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

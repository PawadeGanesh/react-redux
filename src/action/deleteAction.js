import axios from "axios";
import getData from "./getAction";

export default function deleteData(id) {
    console.log('coming', id);
   
    return(dispatch) => {
        axios.delete(`http://localhost:5000/vidly/api/genres/${id}`)
        .then(res => {
            console.log("delete", res)
            dispatch(getData())
            // dispatch({ type: DELETE_DATA, payload: id})
        })
        .catch(err => console.log(err));
    }
}
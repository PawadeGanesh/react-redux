// import { CREATE_DATA } from './constant';
import getData from './getAction';
import axios from 'axios';


export default function createData(submitdetails) {
    console.log('submitdetails', submitdetails);
 
    return (dispatch) => {
        axios.post('http://localhost:5000/vidly/api/genres/', submitdetails, {
            headers: {'Content-Type': 'application/json' }
        })
            .then(res => {
                // console.log("action1", res)
                dispatch(getData())
            })
            .catch( err => {
                
                console.log(err);
            });
    }
   
}
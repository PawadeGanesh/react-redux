import axios from 'axios';
import {GET_DATA} from './constant';
// export  const getData = () => {

// }

export default function getData(){
  
    return (dispatch) => {
        axios
        .get('http://localhost:5000/vidly/api/genres/')
            .then(res => {
                console.log('actions', res.data);
              dispatch({type: GET_DATA, payload: res.data})
            })
    }
  
}
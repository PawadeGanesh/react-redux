import axios from 'axios';

export function getStudentAction(){

    return (dispatch) => {
        axios.get('http://localhost:5000/vidly/api/students')
            .then( res => {
                console.log('GET_STUDENT_DATA_ACTION', res.data);
                dispatch({type: 'GET_STUDENT_DATA', payload: res.data})
            })
            .catch(err => {
                console.log(err);
            })
    }

}
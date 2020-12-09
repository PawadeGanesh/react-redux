export const getStudentReducer = (state = [], action) => {
    console.log("GET_STUDENT_REDUCER",action.payload);
    switch(action.type){
        case 'GET_STUDENT_DATA': 
            return {...state, state: action.payload}

        default:
            return {...state}
    }
}
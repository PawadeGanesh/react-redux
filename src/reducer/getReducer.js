export const getReducer = (state = [], action) => {
    
    // console.log('reducer', action.payload)
    switch(action.type){
        case 'GET_DATA':
            return {...state, state: action.payload}

            // case 'CREATE_DATA': {
            //     const data = state.state || [];
            //     data.push(action.payload);
            //     console.log(data);
            // return {...state, state: data}
            // }
        
        default:
            return {...state}
    }
}
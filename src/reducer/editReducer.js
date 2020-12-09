export const editReducer = (state = [], action) => {
    switch(action.type){
        case 'EDIT_DATA': 
            return {...state, state: action.payload}
        
        default:
            return {...state}
    }
}
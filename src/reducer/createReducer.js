export const createReducer = (state = [], action) => {
    switch(action.type){
        case 'CREATE_DATA':
            return {...state, state: action.payload}

        default: 
            return {...state}
    }
}
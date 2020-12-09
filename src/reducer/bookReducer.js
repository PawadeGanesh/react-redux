const initialState = {
    books : [
        {id: 1, name: 'F1', author: 'varun'},
        {id: 2, name: 'F2', author: 'junnu'},
        {id: 3, name: 'F3', author: 'anirban'},
    ]
}

export const  BookReducer = (state = initialState, action) => {
        console.log("BookReducer", action.payload);
        switch(action.type){

            // case 'SELECT_BOOK': {
            //     return {...state, state: action.payload}
            // }
            
            default :
                return {...state}
        }
      
    }



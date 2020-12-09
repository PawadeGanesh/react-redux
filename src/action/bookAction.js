import { SELECT_BOOK } from "./constant"

export default function selectBook(book) {
    return (dispatch) => {
        dispatch({type: SELECT_BOOK, payload: book})
    }
}
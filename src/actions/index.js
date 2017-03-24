export const ADD_BOOK = 'ADD_BOOK';

export function addBook(title, author){
    return {
        type: ADD_BOOK,
        title,
        author
    }

}
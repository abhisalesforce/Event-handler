export function selectBook(book){

//selectbook is an actioncreater it needs to return action, an object with a type property.
  return{
    type : 'BOOK_SELECTED',
    payload : book
  };
}

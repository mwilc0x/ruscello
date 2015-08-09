export function fetchBooks(books: BookList[]) {
  return {
    type: 'RECEIVE_BOOKS',
    list: books
  }
}

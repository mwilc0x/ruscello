export function fetchBooks(books) {
  return {
    type: 'RECEIVE_BOOKS',
    list: books
  }
}

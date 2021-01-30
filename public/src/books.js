function findAuthorById(authors, id) {
  const authorId = authors.find((author) => author.id === id);
  return authorId;
}

function findBookById(books, id) {
  const bookId = books.find((book) => book.id === id);
  return bookId;
}

function partitionBooksByBorrowedStatus(books) {
  let booksStatusArray = [];
  const borrowed = books.filter((book) => !book.borrows[0].returned);
  const returned = books.filter((book) => book.borrows[0].returned);
  booksStatusArray.push(borrowed);
  booksStatusArray.push(returned);
  return booksStatusArray;
}

function getBorrowersForBook({borrows}, accounts) {
  let bookBorrowers = [];
  let getAccount = [];
  bookBorrowers = borrows.slice(0, 10).map((borrow) => {
    getAccount = accounts.find((account) => account.id === borrow.id);
    getAccount["returned"] = borrow.returned;
    return bookBorrowers = getAccount;
  })
 
  return bookBorrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

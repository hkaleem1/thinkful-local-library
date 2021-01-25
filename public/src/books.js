function findAuthorById(authors, id) {
  const results = authors.find((author) => author.id === id);
  return results;
}

function findBookById(books, id) {
  const results = books.find((book) => book.id === id);
  return results;
}

function partitionBooksByBorrowedStatus(books) {
  let results = [];
  const borrowed = books.filter((book) => !book.borrows[0].returned);
  const returned = books.filter((book) => book.borrows[0].returned);
  results.push(borrowed);
  results.push(returned);
  return results;
}

function getBorrowersForBook({borrows}, accounts) {
  let results = [];
  let getAccount = [];
  results = borrows.slice(0, 10).map((borrow) => {
    getAccount = accounts.find((account) => account.id === borrow.id);
    getAccount["returned"] = borrow.returned;
    return results = getAccount;
  })
 
  return results;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

function findAccountById(accounts, id) {
  const result = accounts.find((account) => account.id === id);
  return result;
}

function sortAccountsByLastName(accounts) {
  const results = accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
  return results;
}

function numberOfBorrows({id}, books) {

  const results = books.reduce((acc, book) => {
    const numReturn = book.borrows.filter((borrow) => borrow.id === id);
    return acc += numReturn.length;
  }, 0)

    return results;
}

function getBooksPossessedByAccount({id}, books, authors) {
  let results = [];
  let checkId = {};
  let getAuthor= {};
  let finalResult = [];

  results = books.filter((book) => {
    checkId = book.borrows.find((borrow) => borrow.id === id && !borrow.returned);
    return checkId;
  })


  const getAuthors = authors.filter((author) => {
    const inResults = results.find((result) => result.authorId === author.id);
    return inResults;
  })
  
  finalResult = results.map((result) => {
    getAuthor = getAuthors.find((author) => author.id === result.authorId);
    result["author"] = getAuthor;
    return result;
  })

  return finalResult;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};

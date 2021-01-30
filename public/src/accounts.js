function findAccountById(accounts, id) {
  const findAccount = accounts.find((account) => account.id === id);
  return findAccount;
}

function sortAccountsByLastName(accounts) {
  const sortAccount = accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
  return sortAccount;
}

function numberOfBorrows({id}, books) {

  const borrowCount = books.reduce((acc, book) => {
    const numReturn = book.borrows.filter((borrow) => borrow.id === id);
    return acc += numReturn.length;
  }, 0)

    return borrowCount;
}

function getBooksPossessedByAccount({id}, books, authors) {
  let authorNames = [];
  let checkId = {};
  let getAuthor= {};
  let authorsFinal = [];

  authorNames = books.filter((book) => {
    checkId = book.borrows.find((borrow) => borrow.id === id && !borrow.returned);
    return checkId;
  })


  const getAuthors = authors.filter((author) => {
    const inNames = authorNames.find((authorName) => authorName.authorId === author.id);
    return inNames;
  })
  
  authorsFinal = authorNames.map((authorName) => {
    getAuthor = getAuthors.find((author) => author.id === authorName.authorId);
    authorName["author"] = getAuthor;
    return authorName;
  })

  return authorsFinal;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};

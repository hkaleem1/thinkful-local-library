function totalBooksCount(books) {
  return books.length;
}

function totalAccountsCount(accounts) {
  return accounts.length;
}

function booksBorrowedCount(books) {
  return books.filter((book) => !book.borrows[0].returned).length;
}

function getMostCommonGenres(books) {

  let topGenres = [];
  let count = 0;
  topGenres = books.reduce((acc, book) => {
    const name = book.genre;
    count = books.filter((bookGenre) => bookGenre.genre === name).length;
    const checkName = acc.some((checkDup) => checkDup.name === name);
    if (!checkName) {
      acc.push({  name, count  });
    }
    return acc;
  }, [])
  return topGenres.sort((itemA, itemB) => itemB.count - itemA.count).slice(0, 5);
}

function getMostPopularBooks(books) {
  let topBooks = [];
  let numOfBorrows = 0;
  topBooks = books.reduce((acc, book) => {
    numOfBorrows = book.borrows.length;
    acc.push({  "name" : book.title, "count" : numOfBorrows  });
    return acc;
  }, [])
  return topBooks.sort((itemA, itemB) => itemB.count - itemA.count).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let topAuthors = [];
  let getAuthor = {};
  topAuthors = books.reduce((acc, book) => {
    getAuthor = authors.find((author) => book.authorId === author.id);
    const nameSave = `${getAuthor.name.first} ${getAuthor.name.last}`;
    const checkName = acc.some((checkDup) => checkDup.name === nameSave);
    if (!checkName) {
      acc.push({  "name" : nameSave, "count" : book.borrows.length  });
    }
    return acc;
  }, [])
  return topAuthors.sort((itemA, itemB) => itemB.count - itemA.count).slice(0, 5);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

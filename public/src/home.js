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
  let results = [];
  let numOfGenres = 0;
  results = books.reduce((acc, book) => {
    numOfGenres = books.filter((bookGenre) => bookGenre.genre === book.genre).length;
    const checkName = acc.some((checkDup) => checkDup.name === book.genre);
    if (!checkName) {
      acc.push({  "name" : book.genre, "count" : numOfGenres  });
    }
    return acc;
  }, [])
  return results.sort((itemA, itemB) => itemB.count - itemA.count).slice(0, 5);
}

function getMostPopularBooks(books) {
  let results = [];
  let numOfBorrows = 0;
  results = books.reduce((acc, book) => {
    numOfBorrows = book.borrows.length;
    acc.push({  "name" : book.title, "count" : numOfBorrows  });
    return acc;
  }, [])
  return results.sort((itemA, itemB) => itemB.count - itemA.count).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let results = [];
  let getAuthor = {};
  results = books.reduce((acc, book) => {
    getAuthor = authors.find((author) => book.authorId === author.id);
    const nameSave = `${getAuthor.name.first} ${getAuthor.name.last}`;
    const checkName = acc.some((checkDup) => checkDup.name === nameSave);
    if (!checkName) {
      acc.push({  "name" : nameSave, "count" : book.borrows.length  });
    }
    return acc;
  }, [])
  return results.sort((itemA, itemB) => itemB.count - itemA.count).slice(0, 5);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

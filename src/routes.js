const {
  addBooksHandler, getAllBooksHandler, getBooksById, updateBooksById, deleteBooksById,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBooksById,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBooksById,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBooksById,
  },
];

module.exports = routes;

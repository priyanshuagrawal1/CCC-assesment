const Book = require("./book");

class Library {
  constructor(name, books = []) {
    this.books = books;
    this.name = name;
  }

  addBook(book) {
    this.books.push(book);
  }
  getBooksByAuthor(author) {
    return this.books.filter((book) =>
      book.author.toUpperCase().includes(author.toUpperCase())
    );
  }

  getBooksByTitle(title) {
    return this.books.filter((book) =>
      book.title.toUpperCase().includes(title.toUpperCase())
    );
  }
  getBooksBySearch(search) {
    return this.books.filter(
      (book) =>
        book.title.toUpperCase().includes(search.toUpperCase()) ||
        book.author.toUpperCase().includes(search.toUpperCase())
    );
  }
  getBooksTotal() {
    return this.books.length;
  }
}

module.exports = Library;

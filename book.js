class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.id = new Date().toISOString();
  }
  getTitle() {
    return this.title;
  }
  getAuthor() {
    return this.title;
  }
  getPublicationYear() {
    return this.title;
  }
  getId() {
    return this.title;
  }
  setPublicationYear(year) {
    this.publicationYear = year;
  }
  setAuthor(author) {
    this.author = author;
  }
  setTitle(title) {
    this.title = title;
  }
}

module.exports = Book;

const Book = require("./book");
const Library = require("./library");

const book1 = new Book("Harry Potter", "JK Rowling", 1999);
const book2 = new Book("Lord of the Rings", "Tolkien", 1942);
const book3 = new Book("The Hobbit", "Tolkien", 1937);

const library = new Library("public Library", [book1, book2, book3]);
console.log(library.getBooksTotal());
const newBook = new Book("The Alchemist", "Pablo Cohleo", 1946);
library.addBook(newBook);
console.log(library.getBooksTotal());
console.log(library.getBooksByAuthor("Tolkien"));
console.log(library.getBooksByTitle("The Ho"));
console.log(library.getBooksBySearch("lo"));

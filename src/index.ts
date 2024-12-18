import Reader from "./model/Reader";
import Author from "./model/Author";
import Book from "./model/Book";
import { Donations } from "./model/Book";
import Loan, { StudentLoan } from "./model/Loan";
import { Gender } from "./model/Gender";
import Magazine from "./model/Magazine";

let readerTest = new Reader("Alice", 25, "123 street");
console.log(readerTest.getName());    
console.log(readerTest.getAge()); 
console.log(readerTest.getTelephone());
console.log(readerTest.getAddress());

let reader2 = new Reader("Bob", 30, "Rua quinze", 123456789, "bob@mail.com");
console.log(reader2.getEmail());    

let author1 = new Author("J.K. Rowling", "British");
let author2 = new Author("George Orwell", "British");

let book1 = new Book("Harry Potter and the Sorcerer's Stone", Gender.FICTION, author1, 1997);
let book2 = new Donations("1984", Gender.FICTION, author2, 1949);

let reader1 = new Reader("Alice", 30, "Rua Nova", 123456789, "alice@email.com");

let loan1 = new Loan(reader1, book1, new Date("2024-11-20"));

let magazine1 = new Magazine("Super Interessante");

const loanDate = new Date();
let studentLoan1 = new StudentLoan(reader2, book2, loanDate);

console.log(`${reader1.getName()} borrowed the book "${book1.getTitle()}" by ${book1.getAuthor().getName()} (${book1.getYear()}).`);
console.log(`Loan Date: ${loan1.getLoanDate().toDateString()}`);
console.log(loan1.message());

console.log(`Donated books: ${book2.getTitle()}, ${book2.getGender()}`);
console.log(`The first magazine in our collection was ${magazine1.getTitle()}`);
console.log(magazine1.id);
console.log(studentLoan1.message());
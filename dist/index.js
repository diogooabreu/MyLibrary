"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Reader_1 = __importDefault(require("./model/Reader"));
const Author_1 = __importDefault(require("./model/Author"));
const Book_1 = __importDefault(require("./model/Book"));
const Book_2 = require("./model/Book");
const Loan_1 = __importStar(require("./model/Loan"));
const Gender_1 = require("./model/Gender");
const Magazine_1 = __importDefault(require("./model/Magazine"));
let readerTest = new Reader_1.default("Alice", 25, "123 street");
console.log(readerTest.getName());
console.log(readerTest.getAge());
console.log(readerTest.getTelephone());
console.log(readerTest.getAddress());
let reader2 = new Reader_1.default("Bob", 30, "Rua quinze", 123456789, "bob@mail.com");
console.log(reader2.getEmail());
let author1 = new Author_1.default("J.K. Rowling", "British");
let author2 = new Author_1.default("George Orwell", "British");
let book1 = new Book_1.default("Harry Potter and the Sorcerer's Stone", Gender_1.Gender.FICTION, author1, 1997);
let book2 = new Book_2.Donations("1984", Gender_1.Gender.FICTION, author2, 1949);
let reader1 = new Reader_1.default("Alice", 30, "Rua Nova", 123456789, "alice@email.com");
let loan1 = new Loan_1.default(reader1, book1, new Date("2024-11-20"));
let magazine1 = new Magazine_1.default("Super Interessante");
const loanDate = new Date();
let studentLoan1 = new Loan_1.StudentLoan(reader2, book2, loanDate);
console.log(`${reader1.getName()} borrowed the book "${book1.getTitle()}" by ${book1.getAuthor().getName()} (${book1.getYear()}).`);
console.log(`Loan Date: ${loan1.getLoanDate().toDateString()}`);
console.log(loan1.message());
console.log(`Donated books: ${book2.getTitle()}, ${book2.getGender()}`);
console.log(`The first magazine in our collection was ${magazine1.getTitle()}`);
console.log(magazine1.id);
console.log(studentLoan1.message());

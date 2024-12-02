"use strict";
/*
import Reader from "../model/Reader";
import Book from "../model/Book";
import Loan from "../model/Loan";
import Author from "../model/Author";


export default class Database {
    private readers: Reader[] = [];
    private books: Book[] = [];
    private loans: Loan[] = [];
    private authors: Author[] = [];

    public addNewReader(reader: Reader): void {
        this.readers.push(reader);
        console.log(this.authors)
    }

    public getReaderByIndex(index: number): Reader {
        return this.readers[index];
    }

    public getReaderByName(name: string): Reader {
        for (let i = 0; i < this.readers.length; i++) {
            if (this.readers[i].getName() == name) {
                return this.readers[i];
            }
        }
        console.log("Unregistered person.");
        return new Reader();
    }

    public addNewBook(book: Book): void {
        this.books.push(book);
        console.log(this.books);
    }

    public getBookByIndex(index: number): Book {
        return this.books[index];
    }

    public getBookByTitle(title: string): Book {
        for (let i = 0; i < this.books.length; i++){
            if (this.books[i].getTitle() == title) {
                return this.books[i];
            }
        }
        console.log("Book not found.");
        return new Book();
    }

    public addNewAuthor(author: Author): void {
        this.authors.push(author);
        console.log(this.authors);
    }

    public getAuthorByIndex(index: number): Author {
        return this.authors[index];
    }

    public getAuthorByName(name: string): Author {
        for (let i = 0; i < this.authors.length; i++) {
            if (this.authors[i].getName() == name) {
                return this.authors[i];
            }
        }
        console.log("Author not found.");
        return new Author("", "");
    }

} */ 

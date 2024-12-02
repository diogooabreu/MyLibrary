"use strict";
//livros
Object.defineProperty(exports, "__esModule", { value: true });
exports.Donations = void 0;
class Book {
    constructor(title, gender, author, year) {
        this.title = title;
        this.gender = gender;
        this.author = author;
        this.year = year;
    }
    getTitle() {
        return this.title;
    }
    getGender() {
        return this.gender;
    }
    getAuthor() {
        return this.author;
    }
    getYear() {
        return this.year;
    }
}
exports.default = Book;
class Donations extends Book {
    constructor(title, gender, author, year) {
        super(title, gender, author, year);
    }
    getTitle() {
        return `${super.getTitle()} (Donation)`;
    }
}
exports.Donations = Donations;

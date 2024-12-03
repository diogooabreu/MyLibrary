"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentLoan = void 0;
class Loan {
    constructor(reader, book, loanDate, returnDate) {
        this.reader = reader;
        this.book = book;
        this.loanDate = loanDate;
        this.returnDate = returnDate;
    }
    getReader() {
        return this.reader;
    }
    getBook() {
        return this.book;
    }
    getLoanDate() {
        return this.loanDate;
    }
    message() {
        return "Your loan expires in 7 days. Happy reading!!";
    }
}
exports.default = Loan;
class StudentLoan extends Loan {
    constructor(reader, book, loanDate) {
        super(reader, book, loanDate);
    }
    calculateReturnDate() {
        const returnDate = new Date(this.getLoanDate());
        returnDate.setDate(returnDate.getDate() + 7);
        return returnDate;
    }
    message() {
        return "Your loan expires in 7 days. Please return the book on time!";
    }
}
exports.StudentLoan = StudentLoan;

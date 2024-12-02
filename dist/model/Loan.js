"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

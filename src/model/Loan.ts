import Book from "./Book";
import Reader from "./Reader";

export default class Loan {
    private reader: Reader;
    private book: Book;
    private loanDate: Date;
    private returnDate?: Date;

    public constructor(reader: Reader, book: Book, loanDate: Date, returnDate?: Date ) {
        this.reader = reader;
        this.book = book;
        this.loanDate = loanDate;
        this.returnDate = returnDate;
    }

    public getReader(): Reader {
        return this.reader;
    }

    public getBook(): Book {
        return this.book;
    }

    public getLoanDate(): Date {
        return this.loanDate;
    }

    public message() {
        return "Your loan expires in 7 days. Happy reading!!"
    }
}

export class StudentLoan extends Loan {
    public constructor(reader: Reader, book: Book, loanDate: Date) {
        super(reader, book, loanDate); 
    }

    public calculateReturnDate(): Date {
        const returnDate = new Date(this.getLoanDate()); 
        returnDate.setDate(returnDate.getDate() + 7);
        return returnDate;
    }

    public message(): string {
        return "Your loan expires in 7 days. Please return the book on time!";
    }
}
//livros

import Author from "./Author";
import { Gender } from "./Gender";

export default class Book {
    private title: string;
    private gender: Gender;
    private author: Author;
    private year: number;

    public constructor(
        title: string,
        gender: Gender,
        author: Author,
        year: number
    ) {
        this.title = title;
        this.gender = gender;
        this.author = author;
        this.year = year;
    }

    getTitle(): string {
        return this.title;
    }

    getGender(): Gender {
        return this.gender;
    }

    getAuthor(): Author {
        return this.author;
    }

    getYear(): number {
        return this.year;
    }
}

export class Donations extends Book {

    public constructor(title: string, gender: Gender, author: Author, year: number) {
        super(title, gender, author, year); 
    }

    public getTitle(): string {
        return `${super.getTitle()} (Donation)`; 
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Author {
    constructor(name, nationality) {
        this.name = name;
        this.nationality = nationality;
    }
    getName() {
        return this.name;
    }
    getNationality() {
        return this.nationality;
    }
}
exports.default = Author;

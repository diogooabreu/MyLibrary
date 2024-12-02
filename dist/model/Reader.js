"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Reader {
    constructor(name, age, address, tel, email) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.telephone = tel;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getAddress() {
        return this.address;
    }
    getTelephone() {
        return this.telephone;
    }
    getEmail() {
        return this.email;
    }
}
exports.default = Reader;
class Student extends Reader {
    constructor(name, age, address, tel, email) {
        super(name, age, address, tel, email);
    }
    getStudentInfo() {
        return `The loader is ${this.getName()}`;
    }
}
exports.Student = Student;

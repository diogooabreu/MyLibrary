export default class Reader {
    private name: string;
    private age: number;
    private address: string;
    private telephone?: number;
    private email?: string;

    public constructor(name: string, age: number, address: string, tel?: number, email?: string) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.telephone = tel;
        this.email = email;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public getAddress(): string {
        return this.address;
    }

    public getTelephone(): number | undefined {
        return this.telephone;
    }

    public getEmail(): string | undefined {
        return this.email;
    }
}

export class Student extends Reader {
    public constructor(
        name: string,
        age: number,
        address: string,
        tel?: number,
        email?: string
    ) {
        super(name, age, address, tel, email)
    }

    public getStudentInfo() {
        return `The loader is ${this.getName()}`;
    }
}

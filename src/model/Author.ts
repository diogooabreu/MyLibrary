export default class Author {
    private name: string;
    private nationality: string;
    
    public constructor(name: string, nationality: string) {
        this.name = name;
        this.nationality = nationality;
    }

    public getName(): string {
        return this.name;
    }

    public getNationality(): string {
        return this.nationality;
    }
}
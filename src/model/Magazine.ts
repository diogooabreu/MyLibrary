import { Entities } from "./IdentifiyEntities";

export default class Magazine extends Entities {
    private title: string;

    public constructor(title: string) {
        super();
        this.title = title;
    }

    public getTitle(): string {
        return this.title;
    }
}

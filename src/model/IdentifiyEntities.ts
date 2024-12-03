import { EntitiesIdentifier } from "./IEntities";

export abstract class Entities implements EntitiesIdentifier{
     id: string;

    constructor() {
        this.id = Math.random().toString(36).slice(2,11);
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IdentifiyEntities_1 = require("./IdentifiyEntities");
class Magazine extends IdentifiyEntities_1.Entities {
    constructor(title) {
        super();
        this.title = title;
    }
    getTitle() {
        return this.title;
    }
}
exports.default = Magazine;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexControllers {
    index(req, res) {
        res.json({ text: "api is true" });
    }
}
const indexControllers = new IndexControllers();
exports.default = indexControllers;

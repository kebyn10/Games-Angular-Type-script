"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersControllers_1 = __importDefault(require("../controllers/usersControllers"));
class UsersRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:email', usersControllers_1.default.getUser);
        this.router.post('/', usersControllers_1.default.insertUser);
        this.router.delete('/:email', usersControllers_1.default.deleteUser);
        this.router.put('/:email', usersControllers_1.default.updateUser);
    }
}
const usersRoutes = new UsersRoutes();
exports.default = usersRoutes.router;

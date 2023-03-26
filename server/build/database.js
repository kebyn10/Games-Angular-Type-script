"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
const keys_1 = __importDefault(require("./keys"));
const pool = (0, promise_1.createPool)(keys_1.default.database);
exports.default = pool;

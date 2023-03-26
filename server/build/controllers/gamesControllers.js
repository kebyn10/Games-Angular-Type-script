"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesControllers {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [result] = yield database_1.default.query('SELECT * FROM games');
                if (result.length > 0) {
                    res.json(result);
                }
                else {
                    res.status(404).json({ text: "not found" });
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const [result] = yield database_1.default.query('SELECT * FROM games WHERE id=?', [id]);
                if (result.length > 0) {
                    res.json(result[0]);
                }
                else {
                    res.status(404).json({ text: "not found" });
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, description, image } = req.body;
                const [result] = yield database_1.default.query('INSERT INTO games(title,description,image) VALUES (?,?,?)', [title, description, image]);
                if (result.affectedRows = !0) {
                    res.json({ data: "insert ok" });
                }
                else {
                    res.status(404).json({ text: "not found" });
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const [result] = yield database_1.default.query('DELETE FROM games WHERE id=?', [id]);
                if (result.affectedRows) {
                    res.json("Delete ok");
                }
                else {
                    res.status(404).json({ text: "not found" });
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { title, description, image } = req.body;
                const [result] = yield database_1.default.query('UPDATE games SET title=?,description=?,image=? WHERE id=?', [title, description, image, id]);
                if (result.affectedRows != 0) {
                    res.json('UPDATE ok');
                }
                else {
                    res.status(404).json({ text: "not found" });
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
const gamesControllers = new GamesControllers();
exports.default = gamesControllers;

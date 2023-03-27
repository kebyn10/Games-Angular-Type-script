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
class UsersControllers {
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.params;
                const [result] = yield database_1.default.query('SELECT * FROM users WHERE email=?', [email]);
                if (result.length > 0) {
                    res.json(result[0]);
                }
                else {
                    res.status(404).json({ text: "route not foud" });
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    insertUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, name, surname, pass } = req.body;
                const [result] = yield database_1.default.query('INSERT INTO users(email,name,surname,pass) VALUES (?,?,?,?)', [email, name, surname, pass]);
                if (result.affectedRows = !0) {
                    res.json('insert ok');
                }
                else {
                    res.status(404).json({ text: "route not found" });
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.params;
                const [result] = yield database_1.default.query('DELETE FROM users WHERE email=?', [email]);
                if (result.affectedRows != 0) {
                    res.json('delete ok');
                }
                else {
                    res.status(404).json({ text: 'route not found' });
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.params;
                const { name, surname, pass } = req.body;
                const [result] = yield database_1.default.query('UPDATE users SET name=?,surname=?,pass=? WHERE email=?', [name, surname, pass, email]);
                if (result.affectedRows = !0) {
                    res.json('update user ok');
                }
                else {
                    res.status(404).json({ text: "route not found" });
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, pass } = req.body;
                const [result] = yield database_1.default.query('SELECT pass from users WHERE email=?', [email]);
                if (result.length > 0) {
                    const password = result[0].pass;
                    if (password == pass) {
                        res.json('loged');
                    }
                    else {
                        res.json('passWrong');
                    }
                }
                else {
                    res.json('not found');
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
const usersControllers = new UsersControllers();
exports.default = usersControllers;

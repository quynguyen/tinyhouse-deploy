"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const user = process.env.DB_USER;
const userPassword = process.env.DB_USER_PASSWORD;
const cluster = process.env.DB_CLUSTER;
const dbName = process.env.DB_NAME;
const url = `mongodb+srv://${user}:${userPassword}@${cluster}.mongodb.net`;
exports.connectDatabase = () => __awaiter(this, void 0, void 0, function* () {
    let client = yield mongodb_1.MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    let db = client.db(dbName);
    return {
        bookings: db.collection("bookings"),
        listings: db.collection("listings"),
        users: db.collection("users"),
    };
});

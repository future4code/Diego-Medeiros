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
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";
const putNews = (title, content) => __awaiter(void 0, void 0, void 0, function* () {
    const body = {
        title,
        content,
        date: Date.now(),
    };
    try {
        yield axios_1.default.put(`${baseUrl}/news`, body);
        console.log("Noticia enviada");
    }
    catch (error) {
        console.log(error.message);
    }
});
putNews("Hoje tem!!", "Hoje tem muito alcool a noite toda");
//# sourceMappingURL=exercicio4.js.map
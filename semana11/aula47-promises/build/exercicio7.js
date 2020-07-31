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
const createSubscriber = (name, email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = {
            name,
            email,
        };
        yield axios_1.default.put(`${baseUrl}/subscribers`, body);
        console.log("Usuário Criado");
    }
    catch (error) {
        console.log(error.message);
    }
});
const createNews = (title, content) => __awaiter(void 0, void 0, void 0, function* () {
    const body = {
        title,
        content,
        date: Date.now(),
    };
    try {
        yield axios_1.default.put(`${baseUrl}/news`, body);
        const subs = yield axios_1.default.get(`${baseUrl}/subscribers/all`);
        const promiseArray = [];
        for (let sub of subs.data) {
            const body = {
                subscriberId: sub.id,
                message: "Vejam nova notícia, quentíssima",
            };
            promiseArray.push(axios_1.default.post(`${baseUrl}/notifications/send`, body));
        }
        Promise.all(promiseArray);
        console.log("Noticias enviadas e notificações enviadas");
    }
    catch (error) {
        console.log(error.message);
    }
});
const getAllNotifications = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield axios_1.default.get(`${baseUrl}/subscribers/all`);
    const notificationPromises = [];
    for (const user of users.data) {
        notificationPromises.push(axios_1.default.get(`${baseUrl}/subscribers/${user.id}/notifications/all`));
    }
    const result = yield Promise.all(notificationPromises);
    const dataFromResult = result.map((res) => res.data);
    console.log(dataFromResult);
    return dataFromResult;
});
getAllNotifications();
//# sourceMappingURL=exercicio7.js.map
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
const postNotifications = (message) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subs = yield axios_1.default.get(`${baseUrl}/subscribers/all`);
        for (let sub of subs.data) {
            const body = {
                subscriberId: sub.id,
                message,
            };
            axios_1.default.post(`${baseUrl}/notifications/send`, body);
        }
        console.log("Notificação enviada!");
    }
    catch (error) {
        console.log(error.message);
    }
});
postNotifications("Nossa, já já amanhece!");
//# sourceMappingURL=exercicio5.js.map
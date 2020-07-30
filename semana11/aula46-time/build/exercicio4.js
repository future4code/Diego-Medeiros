"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const exercicio1_1 = require("./exercicio1");
const nowEvents = exercicio1_1.allEvents;
const createEvent = (name, description, startAt, finishAt) => {
    if (!name || !description || !startAt || !finishAt) {
        console.log("Input inválido");
        return;
    }
    const diffStartAtAndToday = startAt.diff(moment(), "seconds");
    const diffFinishAtAndToday = finishAt.diff(moment(), "seconds");
    if (diffStartAtAndToday < 0 && diffFinishAtAndToday < 0) {
        console.log("Data inválida");
        return;
    }
    exercicio1_1.allEvents.push({
        name,
        description,
        startAt,
        finishAt,
    });
    console.log(exercicio1_1.allEvents);
};
createEvent(process.argv[2], process.argv[3], moment(process.argv[4], "DD/MM/YYYY HH:mm"), moment(process.argv[5], "DD/MM/YYYY HH:mm"));
//# sourceMappingURL=exercicio4.js.map
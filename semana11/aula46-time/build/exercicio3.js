"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const exercicio1_1 = require("./exercicio1");
moment.locale("pt");
const printAllEvents = (events) => {
    events.forEach((item) => {
        const duration = item.finishAt.diff(item.startAt, "minutes");
        const today = moment();
        const daysUntilEvent = item.startAt.diff(today, "days");
        console.log(`
			Nome: ${item.name}
			Horário de início: ${item.startAt.format("dddd, DD de MMMM de YYYY, HH:mm")}
			Horário de fim: ${item.finishAt.format("DD de MMMM de YYYY, HH:mm")}
			Descrição: ${item.description}
			Duração: ${duration} minutos
			Dias até o evento: ${daysUntilEvent}
		`);
    });
};
printAllEvents(exercicio1_1.allEvents);
//# sourceMappingURL=exercicio3.js.map
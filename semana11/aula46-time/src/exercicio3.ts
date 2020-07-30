import * as moment from "moment";
import { allEvents, event } from "./exercicio1";

moment.locale("pt");

const printAllEvents = (events: event[]): void => {
  events.forEach((item: event) => {
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
printAllEvents(allEvents);

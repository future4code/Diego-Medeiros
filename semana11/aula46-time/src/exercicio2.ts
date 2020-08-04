import * as moment from "moment";
import { allEvents, event } from "./exercicio1";

moment.locale("pt-br");

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
		`);
  });
};

printAllEvents(allEvents);

//B- Usando o new Date() , pois por padrão utiliza do fuso horário de Londres ou setando o moment para o fuso horario de Londres com utcOffset

import * as moment from "moment";

export type event = {
  name: string;
  description: string;
  startAt: moment.Moment;
  finishAt: moment.Moment;
};

export const allEvents: event[] = [
  {
    name: "Reunião",
    description: "Reunião muito importante",
    startAt: moment("25/06/2020 15:00", "DD/MM/YYYY HH:mm"),
    finishAt: moment("25/06/2020 16:00", "DD/MM/YYYY HH:mm"),
  },
  {
    name: "Reunião2",
    description: "Reunião não muito importante",
    startAt: moment("26/06/2020 17:00", "DD/MM/YYYY HH:mm"),
    finishAt: moment("26/06/2020 18:00", "DD/MM/YYYY HH:mm"),
  },
];

console.log(
  "Evento1 inicio:",
  allEvents[0].startAt.format("DD/MM/YYYY [às] HH:mm")
);
console.log(
  "Evento1 termino:",
  allEvents[0].finishAt.format("DD/MM/YYYY [às] HH:mm")
);

import * as moment from "moment";
import { allEvents, event } from "./exercicio1";

const nowEvents = allEvents;

const createEvent = (
  name: string,
  description: string,
  startAt: moment.Moment,
  finishAt: moment.Moment
): void => {
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

  allEvents.push({
    name,
    description,
    startAt,
    finishAt,
  });
  console.log(allEvents);
};

createEvent(
  process.argv[2],
  process.argv[3],
  moment(process.argv[4], "DD/MM/YYYY HH:mm"),
  moment(process.argv[5], "DD/MM/YYYY HH:mm")
);

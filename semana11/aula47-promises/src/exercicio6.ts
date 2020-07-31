import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

const postNotifications = async (message: string): Promise<void> => {
  try {
    const subs = await axios.get(`${baseUrl}/subscribers/all`);
    const promiseArray: Promise<any>[] = [];

    for (let sub of subs.data) {
      const body = {
        subscriberId: sub.id,
        message,
      };
      promiseArray.push(axios.post(`${baseUrl}/notifications/send`, body));
    }
    await Promise.all(promiseArray);
    console.log("Notificação enviada!");
  } catch (error) {
    console.log(error.message);
  }
};

postNotifications("Nossa, array de Promises de madrugada!");

//A- Executa todas as promises de um array de promises
//B- Executar todas as promises nem a necessidade de esperar uma notificação de cada Promise

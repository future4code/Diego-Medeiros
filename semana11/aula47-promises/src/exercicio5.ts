import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

const postNotifications = async (message: string): Promise<void> => {
  try {
    const subs = await axios.get(`${baseUrl}/subscribers/all`);

    for (let sub of subs.data) {
      const body = {
        subscriberId: sub.id,
        message,
      };
      axios.post(`${baseUrl}/notifications/send`, body);
    }
    console.log("Notificação enviada!");
  } catch (error) {
    console.log(error.message);
  }
};

postNotifications("Nossa, já já amanhece!");

//A- Não é recomendavel usar o forEach , pois podem acontecer problemas estranhos, pois os métodos de array não foram feitos para serem usados em funções assincronas.

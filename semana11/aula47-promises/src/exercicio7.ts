import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

const createSubscriber = async (name: string, email: string) => {
  try {
    const body = {
      name,
      email,
    };
    await axios.put(`${baseUrl}/subscribers`, body);
    console.log("Usuário Criado");
  } catch (error) {
    console.log(error.message);
  }
};

const createNews = async (title: string, content: string): Promise<void> => {
  const body = {
    title,
    content,
    date: Date.now(),
  };
  try {
    await axios.put(`${baseUrl}/news`, body);
    const subs = await axios.get(`${baseUrl}/subscribers/all`);
    const promiseArray: Promise<any>[] = [];
    for (let sub of subs.data) {
      const body = {
        subscriberId: sub.id,
        message: "Vejam nova notícia, quentíssima",
      };
      promiseArray.push(axios.post(`${baseUrl}/notifications/send`, body));
    }
    Promise.all(promiseArray);

    console.log("Noticias enviadas e notificações enviadas");
  } catch (error) {
    console.log(error.message);
  }
};

const getAllNotifications = async (): Promise<any> => {
  const users = await axios.get(`${baseUrl}/subscribers/all`);

  const notificationPromises = [];
  for (const user of users.data) {
    notificationPromises.push(
      axios.get(`${baseUrl}/subscribers/${user.id}/notifications/all`)
    );
  }

  const result = await Promise.all(notificationPromises);

  const dataFromResult = result.map((res) => res.data);
  console.log(dataFromResult);
  return dataFromResult;
};

// A - createSubscriber("Saruman", "saruman@saruman.com");
// B- createNews( "A noite é uma criança", "Codando até não aguentar mais, com as corujas!");
// C - getAllNotifications();

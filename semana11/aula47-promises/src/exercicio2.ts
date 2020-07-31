import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

const getAllSubscribers = async (): Promise<any[]> => {
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  return users.data;
};

//A - Ao invés de usar "async function" no começo da escrita, criamos uma const com o nome da função e depois do = usamos o "async" e depois abrimos a função normal com a tipagem.

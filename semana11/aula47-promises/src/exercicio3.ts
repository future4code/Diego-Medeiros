import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

type User = {
  id: string;
  name: string;
  email: string;
};

const getAllSubscribers = async (): Promise<User[]> => {
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  return users.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};

//A- Não.
//B- Para ter um controle maior do tipo das informações retornadas.

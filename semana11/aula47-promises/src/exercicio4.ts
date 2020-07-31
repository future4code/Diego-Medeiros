import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

const putNews = async (title: string, content: string): Promise<void> => {
  const body = {
    title,
    content,
    date: Date.now(),
  };
  try {
    await axios.put(`${baseUrl}/news`, body);
    console.log("Noticia enviada");
  } catch (error) {
    console.log(error.message);
  }
};

putNews("Hoje tem!!", "Hoje tem muito alcool a noite toda");

//A - Função assincrona, pois não  roda de forma síncrona dentro do código, a aplicação não precisa esperar ela acabar para rodar o resto do código. Função assincrona devolve uma Promise, que retorna ações (caso dê certou ou não) de acordo com a ação principal.

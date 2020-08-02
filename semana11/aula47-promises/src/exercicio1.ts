import axios from "axios";
//A - GET /subscribers/all
// https://us-central1-labenu-apis.cloudfunctions.net/labenews/subscribers/all
//B - Com Promise<any[]>
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";
async function getSubscribers(): Promise<any[]> {
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  return users.data;
}
getSubscribers();

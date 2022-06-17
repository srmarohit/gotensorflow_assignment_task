import axios from "axios";
export default async function () {
  return await axios.get("http://localhost:5500/api/user");
}

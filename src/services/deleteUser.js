import axios from "axios";

export default async function (id) {
  let config = {
    url: "http://localhost:5500/api/user/" + id,
    method: "delete",
  };
  return await axios(config);
}

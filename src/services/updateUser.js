import axios from "axios";

export default async function (id, data) {
  let config = {
    url: "http://localhost:5500/api/user/" + id,
    method: "put",
    data,
  };
  return await axios(config);
}

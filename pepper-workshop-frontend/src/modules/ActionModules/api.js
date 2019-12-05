import { serverURL } from "../../constants";

export function queueAction(action) {
  console.log(action);
  const url = `${serverURL}add_action`;
  console.log(url);
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(action)
  }).then(response => response.json());
}

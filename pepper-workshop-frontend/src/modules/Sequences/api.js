import { serverURL } from "../../constants";

export function fetchSequences() {
  console.log("x");
  const url = `${serverURL}sequences`;
  return fetch(url).then(response => response.json());
}

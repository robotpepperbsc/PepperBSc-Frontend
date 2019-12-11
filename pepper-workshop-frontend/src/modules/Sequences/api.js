import { serverURL } from "../../constants";

export function fetchSequences() {
  const url = `${serverURL}sequences`;
  fetch(url).then(response => response.json());
}

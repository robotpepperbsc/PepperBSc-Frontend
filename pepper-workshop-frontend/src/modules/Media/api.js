import { serverURL } from "../../constants";

export function fetchMedia() {
  const url = `${serverURL}media`;
  return fetch(url).then(response => response.json());
}

import { serverURL } from "../../constants";

export function fetchStatus() {
  const url = `${serverURL}logger`;
  return fetch(url).then(response => response.json());
}

export function clearQueue() {
  const url = `${serverURL}clear_queue`;
  return fetch(url).then(response => response.json());
}

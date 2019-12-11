import { serverURL } from "../../constants";

export function fetchRecordings() {
  const url = `${serverURL}recordings`;
  return [
    {
      name: "IMG001",
      file_type: "jpg",
      duration: 213
    },
    {
      name: "VID002",
      file_type: "mp4",
      duration: 213
    }
  ];
  return fetch(url).then(response => {
    const r = response.json();
    return r.recordings;
  });
}

export function playRecording(name, fileType) {
  const url = `${serverURL}recordings?name="${name}.${fileType}"`;
  return fetch(url).then(response => response.json());
}

export function startRecording() {
  const url = `${serverURL}record?status=true`;
  return fetch(url).then(response => response.json());
}

export function stopRecording() {
  const url = `${serverURL}record?status=false`;
  return fetch(url).then(response => response.json());
}

export function fetchNotes() {
  return fetch("/notes").then(response =>
    response.json().then(notes => notes.reverse())
  );
}

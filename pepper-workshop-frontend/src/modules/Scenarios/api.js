export function fetchScenarios() {
  // return fetch("/notes").then(response =>
  //   response.json().then(notes => notes.reverse())
  // );

  return [
    {
      name: "scenario1",
      description: "cos tam",
      last_modification_date: "2019-02-10"
    },
    {
      name: "scenario2",
      description: "jejejejeej",
      last_modification_date: "2019-02-13"
    }
  ];
}

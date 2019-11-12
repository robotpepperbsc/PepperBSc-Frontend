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

export function deleteScenario() {}

export function fetchScenario(name) {
  return {
    name: "scenario2",
    description: "jejejejeej",
    last_modification_date: "2019-02-13",
    actions: [
      {
        type: "speech",
        text: "hello kids",
        volume: 0.8,
        speech_speed: 200,
        language: "English"
      },
      {
        type: "sequence",
        name: "boogie woogie"
      }
    ]
  };
}

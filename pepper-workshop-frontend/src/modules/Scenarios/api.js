import {commandType, pepperActionType} from "../../components/Improvisation/pepperActionService";

export function fetchScenarios() {
  // return fetch("/notes").then(response =>
  //   response.json().then(notes => notes.reverse())
  // );

  return [
    {
      name: "scenario1",
      description: "demo scenario",
      last_modification_date: "2019-02-10"
    },
    {
      name: "scenario2",
      description: "second demo scenario",
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
        type: pepperActionType.speech,
        text: "hello kids",
        volume: 0.8,
        speechSpeed: 200,
        language: "English"
      },
      {
        type: pepperActionType.sequence,
        name: "boogie woogie"
      },
      {
        type: pepperActionType.generic,
        command: commandType.forward
      }
    ]
  };
}

import {
  commandType,
  pepperActionType
} from "../../components/Improvisation/pepperActionService";
import { serverURL } from "../../constants";

export function fetchScenarios() {
  // const url = `${serverURL}scenarios`;
  // return fetch(url).then(response =>
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

export function fetchScenario(name) {
  const url = `${serverURL}scenario?name="${name}`;
  // return fetch(url).then(response =>
  //   response.json()
  // );
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

export function runScenario(name, start, end) {
  console.log("running scenario", name, start, end);
  const url = `${serverURL}scenario?name="${name}&run="true"${
    start ? `&start=${start}` : null
  }${end ? `&end=${end}` : null}`;
  // return fetch(url).then(response =>
  //   response.json()
  // );
}

export function deleteScenario(name) {
  const url = `${serverURL}scenarios/remove?name="${name}`;
  // return fetch(url).then(response =>
  //   response.json()
  // );
}

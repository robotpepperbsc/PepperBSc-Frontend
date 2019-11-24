export const createSpeechAction = (text, volume, speechSpeed, language) => {
  return {
    type: "speech",
    text: text,
    volume: volume,
    speechSpeed: speechSpeed,
    language: language
  };
};

const commandType = {
  forward: "forward",
  backward: "backward",
  turnRight: "turn_right",
  turnLeft: "turn_left"
};

export const createMoveAction = command => {
  return {
    type: "generic",
    command: commandType[command]
  };
};

export const createSequenceAction = name => {
  return {
    type: "sequence",
    name: name
  };
};

export const createMediaAction = (name, fileType) => {
  return {
    type: "media",
    name: name,
    file_type: fileType
  };
};

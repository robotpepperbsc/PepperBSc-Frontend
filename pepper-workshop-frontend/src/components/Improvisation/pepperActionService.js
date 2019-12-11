export const pepperActionType = {
  speech: "speech",
  generic: "movement",
  sequence: "sequence",
  media: "media"
};

export const createSpeechAction = (text, volume, speechSpeed, language) => {
  return {
    type: pepperActionType.speech,
    text: text,
    volume: volume,
    speech_speed: speechSpeed,
    language: language
  };
};

export const commandType = {
  forward: "forward",
  backward: "backward",
  turnRight: "turn_right",
  turnLeft: "turn_left"
};

export const createMoveAction = (command, distance, direction) => {
  return {
    type: pepperActionType.generic,
    command: commandType[command],
    distance,
    direction
  };
};

export const createSequenceAction = name => {
  return {
    type: pepperActionType.sequence,
    name: name
  };
};

export const createMediaAction = (name, fileType) => {
  return {
    type: pepperActionType.media,
    name: name,
    file_type: fileType
  };
};

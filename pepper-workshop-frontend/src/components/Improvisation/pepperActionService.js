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
  up: "move_forward",
  back: "move_backward",
  right: "turn_right",
  left: "turn_left"
};

export const createMoveAction = (command, distance, angle) => {
  return {
    type: pepperActionType.generic,
    command: commandType[command],
    distance,
    angle
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

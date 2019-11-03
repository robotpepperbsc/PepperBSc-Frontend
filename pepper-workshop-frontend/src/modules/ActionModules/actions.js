export const QUEUE_SPEECH = "QUEUE_SPEECH";
export const QUEUE_MOVE = "QUEUE_MOVE";
export const QUEUE_SEQUENCE = "QUEUE_SEQUENCE";
export const QUEUE_MEDIA = "QUEUE_MEDIA";

export const queueSpeech = (text, volume, speechSpeed, language) => ({
  type: QUEUE_SPEECH,
  text,
  volume,
  speechSpeed,
  language
});

export const queueMove = (command, length, angle) => ({
  type: QUEUE_MOVE,
  command,
  length,
  angle
});

export const queueSequence = name => ({
  type: QUEUE_SEQUENCE,
  name
});

export const queueMedia = (name, fileType) => ({
  type: QUEUE_MEDIA,
  name,
  fileType
});

export const QUEUE_SPEECH = "QUEUE_SPEECH";
export const QUEUE_MOVE = "QUEUE_MOVE";
export const QUEUE_SEQUENCE = "QUEUE_SEQUENCE";
export const QUEUE_MEDIA = "QUEUE_MEDIA";

export const queueSpeech = action => ({
  type: QUEUE_SPEECH,
  pepperAction: action
});

export const queueMove = action => ({
  type: QUEUE_MOVE,
  pepperAction: action
});

export const queueSequence = action => ({
  type: QUEUE_SEQUENCE,
  pepperAction: action
});

export const queueMedia = action => ({
  type: QUEUE_MEDIA,
  pepperAction: action
});

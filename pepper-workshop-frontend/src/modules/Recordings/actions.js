export const GET_RECORDINGS = "GET_RECORDINGS";
export const RECORDINGS_RECEIVED = "RECORDINGS_RECEIVED";
export const PLAY_RECORDING = "PLAY_RECORDING";
export const START_RECORDING = "START_RECORDING";
export const STOP_RECORDING = "STOP_RECORDING";

export const getRecordings = () => ({
  type: GET_RECORDINGS
});

export const playRecording = recording => ({
  type: PLAY_RECORDING,
  recording: recording
});

export const startRecording = () => ({
  type: START_RECORDING
});

export const stopRecording = () => ({
  type: STOP_RECORDING
});

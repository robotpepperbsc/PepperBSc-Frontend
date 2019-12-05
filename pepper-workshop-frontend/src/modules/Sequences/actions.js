export const GET_SEQUENCES = "GET_SEQUENCES";
export const POST_SEQUENCE = "POST_SEQUENCE";
export const SEQUENCES_RECEIVED = "SEQUENCES_RECEIVED";


export const getSequences = () => ({
    type: GET_SEQUENCES
});

export const postSequence = sequence => ({
    type: POST_SEQUENCE,
    sequence
});
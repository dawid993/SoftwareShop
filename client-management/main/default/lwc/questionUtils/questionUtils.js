const ANSWER_MULTI_SELECT_TYPE = "MULTI";
const ANSWER_RADIO_SELECT_TYPE = "RADIO";
const ANSWER_SLIDE_SELECT_TYPE = "SLIDER";

const ALLOWED_ANSWER_TYPES = ["MULTI", "RADIO", "SLIDE"];

function isString(arg) {
    return typeof arg === "string";
}

function isAllowedQuestionType(questionType = "") {
    return ALLOWED_ANSWER_TYPES.some((type) => type === questionType);
}

function isAnswerStructureValid(answers) {
    return answers && Array.isArray(answers);
}

export {
    isString,
    isAllowedQuestionType,
    isAnswerStructureValid,
    ALLOWED_ANSWER_TYPES,
    ANSWER_MULTI_SELECT_TYPE,
    ANSWER_RADIO_SELECT_TYPE,
    ANSWER_SLIDE_SELECT_TYPE
};

import QuestionAnswersBase from "c/questionAnswersBase";

export default class QuestionSingleSelectAnswer extends QuestionAnswersBase {
    onRadioOptionSelected(event) {
        const selectedOptionId = event?.currentTarget?.dataset?.id;
        if (selectedOptionId) {
            Array.from(this.template.querySelectorAll("input[data-id]"))
                .filter(inputElem => inputElem.dataset?.id !== selectedOptionId)
                .forEach(inputElem => { inputElem.checked = false });
        }
    }
}
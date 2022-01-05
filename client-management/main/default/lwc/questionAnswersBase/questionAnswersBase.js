import { api, LightningElement } from 'lwc';

export default class QuestionAnswersBase extends LightningElement {
    _answers;

    @api
    set answers(value) {   
        this._answers = value;
    }

    get answers() {
        return this._answers;
    }

    @api
    getSelectedAnswers() {        
        const answers = Array.from(this.template.querySelectorAll("input[data-id]"))
            .filter(inputElement => inputElement.checked)
            .map(inputElement => inputElement.dataset.id);
            
        return Object.freeze(answers);
    }

    @api
    selectAnswers(selectedAnswers = []) {
        const answersSet = new Set(selectedAnswers);
        Array.from(this.template.querySelectorAll("input[data-id]"))
            .filter(input => answersSet.has(input.dataset.id))
            .forEach(input => { input.checked = true });
    }
}
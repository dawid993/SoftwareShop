import { api, LightningElement } from 'lwc';
import {
    ANSWER_MULTI_SELECT_TYPE,
    ANSWER_RADIO_SELECT_TYPE,
    ANSWER_SLIDE_SELECT_TYPE,
} from 'c/questionUtils';

export default class QuestionAnswers extends LightningElement {
    _anwserType;
    _answers;
    _selectedAnswers;

    @api
    set answerType(value) {
        this._anwserType = value;
    }

    get answerType() {
        return this._anwserType;
    }

    @api
    set answers(value = []) {        
        this._answers = value;
    }

    get answers() {
        return this._answers;
    }

    @api
    set selectedAnswers(value) {
        this._selectedAnswers = value;
    }

    get selectedAnswers() {
        return [...this.selectedAnswers];
    }

    renderedCallback() {
        if (this._selectedAnswers) {
            this.template.querySelector(this.getCurrentAnswerComponentName()).selectAnswers(this._selectedAnswers);
        }
    }

    @api
    getSelectedAnswers() {
        const componentName = this.getCurrentAnswerComponentName();
        const component = this.template.querySelector(componentName);
        if (!component) {
            throw new Error('Something went wrong. Cannot find answer component.');
        }

        return component.getSelectedAnswers();
    }

    getCurrentAnswerComponentName() {
        return this.isMultiSelectAnswer ?
            "c-question-multi-select-answer" : this.isRadioSelectAnswer ? "c-question-single-select-answer" : "c-question-slider-answer";
    }   

    get isMultiSelectAnswer() {
        return this.answerType === ANSWER_MULTI_SELECT_TYPE;
    }

    get isRadioSelectAnswer() {
        return this.answerType === ANSWER_RADIO_SELECT_TYPE;
    }

    get isSliderSelectAnswer() {
        return this.answerType === ANSWER_SLIDE_SELECT_TYPE;
    }

}
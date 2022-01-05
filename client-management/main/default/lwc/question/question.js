import { api, LightningElement } from 'lwc';

export default class Question extends LightningElement {
    _questionCompound = {};

    @api
    set questionCompound(value) {
        this._questionCompound = value;
    }

    get questionCompound() {
        return this._questionCompound;
    }   
   
    @api
    getSelectedAnswers() {
        return this.template.querySelector("c-question-answers").getSelectedAnswers();
    }
}
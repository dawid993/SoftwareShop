import { api, LightningElement } from "lwc";
export default class QuestionContent extends LightningElement {
    _questionOrder;
    _questionContent;

    @api
    set questionOrder(value) {
        this._questionOrder = value;
    }

    get questionOrder() {
        return this._questionOrder;
    }

    @api
    set questionContent(value) {
        this._questionContent = value;
    }

    get questionContent() {
        return this._questionContent;
    }
}

import { api, LightningElement } from "lwc";

export default class QuestionSliderAnswer extends LightningElement {
    _label = "";
    valueType = "";
    minValue = 0;
    maxValue = 0;
    step = 0;

    selectedValue = 0;

    @api
    set answers(value = []) {
        value = Array.isArray(value) && value.length === 1 ? value : [{}];
        if (value.length === 1) {
            this.minValue = +(value[0].min ?? 0);
            this.maxValue = +(value[0].max ?? 100);
            this.step = +(value[0].step ?? 1);
            this.valueType = value[0].valueType ?? "";
        }
    }

    get answers() {
        return Object.freeze([this.minValue, this.maxValue]);
    }

    @api
    set label(value) {
        this._label = value ?? "";
    }

    get label() {
        return this._label + " " + this.selectedValue + " " + this.valueType;
    }

    onSliderChange(event) {
        if (event.detail.value) {
            this.selectedValue = event.detail.value;
        }
    }

    @api
    getSelectedAnswers() {
        return Object.freeze([this.selectedValue]);
    }

    @api
    selectAnswers(selectedAnswers = []) {
        this.selectedValue =
            selectedAnswers.length === 1 ? +selectedAnswers[0] : 0;
    }
}

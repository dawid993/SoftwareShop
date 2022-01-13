import { api, LightningElement } from "lwc";
import getQuestions from "./questionMock";
import questionIterator from "./questionIterator";

const QUESTION_SWITCH_DELAY = 500;

export default class Questionnaire extends LightningElement {
    _currentQuestionIndex = 0;
    _questionIterator;

    questionsCompounds = [];
    currentQuestionCompound = {};
    showQuestions = true;
    showSummary = false;
    renderingNextQuestion = false;

    get isNextQuestionAvailable() {
        return this._questionIterator?.hasNext();
    }

    get isPreviousQuestionAvailable() {
        return this._questionIterator?.hasPrevious();
    }

    get isLastQuestion() {
        return !this._questionIterator?.hasNext();
    }

    connectedCallback() {
        getQuestions().then((result) => {
            this.questionsCompounds = Array.isArray(result) ? result : [];
            this._questionIterator = questionIterator(this.questionsCompounds);

            if (this._questionIterator.hasNext()) {
                this.currentQuestionCompound =
                    this._questionIterator.next()?.value;
            }
        });
    }

    _saveAnswer() {
        const question = this.template.querySelector("c-question");
        this.currentQuestionCompound.selectedAnswers =
            question.getSelectedAnswers();
    }

    saveAnswerAndSetNextQuestion() {
        this._saveAnswer();
        if (this.isNextQuestionAvailable) {
            this.toggleQuestion();
            this.questionSwitch(() => {
                this.currentQuestionCompound =
                    this._questionIterator.next()?.value;
            });
        }
    }

    setPreviousQuestion() {
        if (this.isPreviousQuestionAvailable) {
            this.toggleQuestion();
            this.questionSwitch(() => {
                this.currentQuestionCompound =
                    this._questionIterator.previous()?.value;
            });
        }
    }

    toggleQuestion() {
        this.renderingNextQuestion = !this.renderingNextQuestion;
    }

    questionSwitch(callback) {
        /* eslint-disable-next-line */
        return setTimeout(() => {
            this.toggleQuestion();
            callback.call(this);
        }, QUESTION_SWITCH_DELAY);
    }

    setSummaryAsActiveScreen() {
        this._saveAnswer();
        this.showSummary = true;
        this.showQuestions = false;
        this.testResponse = JSON.stringify(this.questionsCompounds);
    }

    @api
    getCurrentQuestionIndex() {
        return this._questionIterator.currentIndex();
    }

    @api
    getQuestionsWithSelectedAnswers() {
        return Object.freeze([...this.questionsCompounds]);
    }
}

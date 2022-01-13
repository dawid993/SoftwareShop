import { createElement } from "lwc";
import QuestionAnswers from "c/questionAnswers";
import questionCompoundTest from "c/questionTestData";

describe("c-question-answers", () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it("should instantiate multiselect answer component and get 2 selected answers", () => {
        const element = createElement("c-question-answers", {
            is: QuestionAnswers
        });
        element.answerType = questionCompoundTest[0].type;
        element.answers = questionCompoundTest[0].answers;

        document.body.appendChild(element);

        return Promise.resolve().then(() => {
            const multiselectAnswerCmp = element.shadowRoot.querySelector(
                "c-question-multi-select-answer"
            );
            multiselectAnswerCmp.shadowRoot
                .querySelector("input[data-id='2']")
                .click();
            multiselectAnswerCmp.shadowRoot
                .querySelector("input[data-id='3']")
                .click();
            expect(element.getSelectedAnswers().length).toBe(2);
            expect(
                element.getSelectedAnswers().filter((elem) => +elem === 2)
                    .length
            ).toBe(1);
            expect(
                element.getSelectedAnswers().filter((elem) => +elem === 3)
                    .length
            ).toBe(1);
        });
    });

    it("should instantiate multiselect answer component and get 0 selected answers", () => {
        const element = createElement("c-question-answers", {
            is: QuestionAnswers
        });
        element.answerType = questionCompoundTest[0].type;
        element.answers = questionCompoundTest[0].answers;

        document.body.appendChild(element);

        return Promise.resolve().then(() => {
            expect(element.getSelectedAnswers().length).toBe(0);
        });
    });

    it("should instantiate single select answer component and get 0 selected answers", () => {
        const element = createElement("c-question-answers", {
            is: QuestionAnswers
        });
        element.answerType = questionCompoundTest[1].type;
        element.answers = questionCompoundTest[1].answers;

        document.body.appendChild(element);

        return Promise.resolve().then(() => {
            expect(element.getSelectedAnswers().length).toBe(0);
        });
    });

    it("should instantiate single select answer component and get 1 selected answers", () => {
        const element = createElement("c-question-answers", {
            is: QuestionAnswers
        });
        element.answerType = questionCompoundTest[1].type;
        element.answers = questionCompoundTest[1].answers;

        document.body.appendChild(element);
        return Promise.resolve().then(() => {
            const singleselectAnswerCmp = element.shadowRoot.querySelector(
                "c-question-single-select-answer"
            );
            singleselectAnswerCmp.shadowRoot
                .querySelector("input[data-id='2']")
                .click();
            expect(element.getSelectedAnswers().length).toBe(1);
            expect(+element.getSelectedAnswers()[0]).toBe(2);
        });
    });

    it("should instantiate single select answer component select one answer and then select another", () => {
        const element = createElement("c-question-answers", {
            is: QuestionAnswers
        });
        element.answerType = questionCompoundTest[1].type;
        element.answers = questionCompoundTest[1].answers;

        document.body.appendChild(element);
        return Promise.resolve()
            .then(() => {
                const singleselectAnswerCmp = element.shadowRoot.querySelector(
                    "c-question-single-select-answer"
                );
                singleselectAnswerCmp.shadowRoot
                    .querySelector("input[data-id='2']")
                    .click();
                expect(element.getSelectedAnswers().length).toBe(1);
                expect(+element.getSelectedAnswers()[0]).toBe(2);
                singleselectAnswerCmp.shadowRoot
                    .querySelector("input[data-id='1']")
                    .click();
                return Promise.resolve();
            })
            .then(() => {
                expect(element.getSelectedAnswers().length).toBe(1);
                expect(+element.getSelectedAnswers()[0]).toBe(1);
            });
    });

    it("should preselect answers for multiselect answers component", () => {
        const element = createElement("c-question-answers", {
            is: QuestionAnswers
        });

        element.answerType = questionCompoundTest[0].type;
        element.answers = questionCompoundTest[0].answers;
        element.selectedAnswers = ["1", "4"];

        document.body.appendChild(element);

        return Promise.resolve()
            .then(() => {
                return Promise.resolve();
            })
            .then(() => {
                const multiselectAnswerCmp = element.shadowRoot.querySelector(
                    "c-question-multi-select-answer"
                );
                const results = Array.from(
                    multiselectAnswerCmp.shadowRoot.querySelectorAll(
                        "input[data-id]"
                    )
                )
                    .filter((input) => input.checked)
                    .map((input) => input.dataset.id)
                    .sort();
                expect(results).toEqual(["1", "4"]);
            });
    });

    it("should preselect answers for single select answers component", () => {
        const element = createElement("c-question-answers", {
            is: QuestionAnswers
        });

        element.answerType = questionCompoundTest[1].type;
        element.answers = questionCompoundTest[1].answers;
        element.selectedAnswers = ["4"];

        document.body.appendChild(element);

        return Promise.resolve()
            .then(() => {
                return Promise.resolve();
            })
            .then(() => {
                const singleSelectAnswerCmp = element.shadowRoot.querySelector(
                    "c-question-single-select-answer"
                );
                const results = Array.from(
                    singleSelectAnswerCmp.shadowRoot.querySelectorAll(
                        "input[data-id]"
                    )
                )
                    .filter((input) => input.checked)
                    .map((input) => input.dataset.id)
                    .sort();
                expect(results).toEqual(["4"]);
            });
    });

    it("should preselect answers for slider answers component", () => {
        const element = createElement("c-question-answers", {
            is: QuestionAnswers
        });

        element.answerType = questionCompoundTest[2].type;
        element.answers = questionCompoundTest[2].answers;
        element.selectedAnswers = ["1000"];

        document.body.appendChild(element);

        return Promise.resolve()
            .then(() => {
                return Promise.resolve();
            })
            .then(() => {
                const singleSelectAnswerCmp = element.shadowRoot.querySelector(
                    "c-question-slider-answer"
                );
                const results =
                    singleSelectAnswerCmp.shadowRoot.querySelector(
                        "lightning-slider"
                    ).value;

                expect(results).toEqual(1000);
            });
    });
});

import { createElement } from "lwc";
import QuestionMultiSelectAnswer from "c/questionMultiSelectAnswer";
import questionCompoundTest from "c/questionTestData";

describe("c-question-multi-select-answer", () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it("should be 4 available answers", () => {
        const element = createElement("c-question-multi-select-answer", {
            is: QuestionMultiSelectAnswer
        });
        element.answers = questionCompoundTest[0].answers;
        document.body.appendChild(element);

        return Promise.resolve().then(() => {
            expect(
                element.shadowRoot.querySelectorAll("input[data-id]").length
            ).toBe(4);
        });
    });

    it("should be 2 selected answers", () => {
        const element = createElement("c-question-multi-select-answer", {
            is: QuestionMultiSelectAnswer
        });
        element.answers = questionCompoundTest[0].answers;
        document.body.appendChild(element);
        element.shadowRoot.querySelector("input[data-id='1']").click();
        element.shadowRoot.querySelector("input[data-id='4']").click();

        return Promise.resolve().then(() => {
            expect(element.getSelectedAnswers().length).toBe(2);
            expect(
                element.getSelectedAnswers().filter((elem) => +elem === 1)
                    .length
            ).toBe(1);
            expect(
                element.getSelectedAnswers().filter((elem) => +elem === 4)
                    .length
            ).toBe(1);
        });
    });

    it("should be 0 selected answers", () => {
        const element = createElement("c-question-multi-select-answer", {
            is: QuestionMultiSelectAnswer
        });
        element.answers = questionCompoundTest[0].answers;
        document.body.appendChild(element);

        return Promise.resolve().then(() => {
            expect(element.getSelectedAnswers().length).toBe(0);
        });
    });

    it("selected answers should be frozen", () => {
        const element = createElement("c-question-multi-select-answer", {
            is: QuestionMultiSelectAnswer
        });
        element.answers = questionCompoundTest[0].answers;
        document.body.appendChild(element);
        element.shadowRoot.querySelector("input[data-id='1']").click();
        element.shadowRoot.querySelector("input[data-id='4']").click();

        return Promise.resolve().then(() => {
            let exceptionThrown = false;
            try {
                element.getSelectedAnswers().push(2);
            } catch (err) {
                exceptionThrown = true;
            }

            expect(exceptionThrown).toBe(true);
        });
    });
});

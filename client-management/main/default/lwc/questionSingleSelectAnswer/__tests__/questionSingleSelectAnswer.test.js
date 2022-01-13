import { createElement } from "lwc";
import QuestionSingleSelectAnswer from "c/questionSingleSelectAnswer";
import questionCompoundTest from "c/questionTestData";

describe("c-question-single-select-answer", () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it("should be 4 available answers", () => {
        const element = createElement("c-question-single-select-answer", {
            is: QuestionSingleSelectAnswer
        });
        element.answers = questionCompoundTest[1].answers;
        document.body.appendChild(element);

        return Promise.resolve().then(() => {
            expect(
                element.shadowRoot.querySelectorAll("input[data-id]").length
            ).toBe(4);
        });
    });

    it("should be one selected answer", () => {
        const element = createElement("c-question-single-select-answer", {
            is: QuestionSingleSelectAnswer
        });
        element.answers = questionCompoundTest[1].answers;
        document.body.appendChild(element);
        element.shadowRoot.querySelector("input[data-id='1']").click();

        return Promise.resolve().then(() => {
            expect(element.getSelectedAnswers().length).toBe(1);
        });
    });

    it("should selected answer and then select another", () => {
        const element = createElement("c-question-single-select-answer", {
            is: QuestionSingleSelectAnswer
        });
        element.answers = questionCompoundTest[1].answers;
        document.body.appendChild(element);
        element.shadowRoot.querySelector("input[data-id='1']").click();

        return Promise.resolve()
            .then(() => {
                const selectedAnswer = element.getSelectedAnswers();
                expect(selectedAnswer.length).toBe(1);
                expect(+selectedAnswer[0]).toBe(1);
                element.shadowRoot.querySelector("input[data-id='4']").click();
                return Promise.resolve();
            })
            .then(() => {
                const selectedAnswer2 = element.getSelectedAnswers();
                expect(selectedAnswer2.length).toBe(1);
                expect(+selectedAnswer2[0]).toBe(4);
            });
    });
});

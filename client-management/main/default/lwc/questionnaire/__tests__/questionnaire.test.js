import { createElement } from 'lwc';
import Questionnaire from 'c/questionnaire';

jest.useFakeTimers();

describe("c-questionnaire", () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it("should render only next button on 1st question", () => {
        const questionnaireCmp = createElement("c-questionnaire", {
            is: Questionnaire
        });
        document.body.appendChild(questionnaireCmp);

        return Promise.resolve().then(() => {
            return Promise.resolve();
        }).then(() => {
            expect(questionnaireCmp.getCurrentQuestionIndex()).toBe(0);
            expect(questionnaireCmp.shadowRoot.querySelector("lightning-button[data-id='next']")).toBeTruthy();
            expect(questionnaireCmp.shadowRoot.querySelector("lightning-button[data-id='previous']")).toBeFalsy();
        });
    });

    it("should render next and previous button on 2st question", () => {
        const questionnaireCmp = createElement("c-questionnaire", {
            is: Questionnaire
        });
        document.body.appendChild(questionnaireCmp);

        return Promise.resolve().then(() => {
            return Promise.resolve();
        }).then(() => {
            questionnaireCmp.shadowRoot.querySelector("lightning-button[data-id='next']").click();
            jest.runAllTimers();
            expect(setTimeout).toHaveBeenCalledTimes(1);
        }).then(() => {
            expect(questionnaireCmp.getCurrentQuestionIndex()).toBe(1);
            expect(questionnaireCmp.shadowRoot.querySelector("lightning-button[data-id='next']")).toBeTruthy();
            expect(questionnaireCmp.shadowRoot.querySelector("lightning-button[data-id='previous']")).toBeTruthy();
        });
    });

    it("should navigate to 2st question and back to 1st one", () => {
        const questionnaireCmp = createElement("c-questionnaire", {
            is: Questionnaire
        });
        document.body.appendChild(questionnaireCmp);

        return Promise.resolve().then(() => {
            return Promise.resolve();
        }).then(() => {
            questionnaireCmp.shadowRoot.querySelector("lightning-button[data-id='next']").click();
            jest.runAllTimers();
        }).then(() => {
            questionnaireCmp.shadowRoot.querySelector("lightning-button[data-id='previous']").click();
            jest.runAllTimers();
        }).then(() => {
            expect(questionnaireCmp.getCurrentQuestionIndex()).toBe(0);
        });
    });

    it("should save answers from questions", () => {
        const questionnaireCmp = createElement("c-questionnaire", {
            is: Questionnaire
        });
        document.body.appendChild(questionnaireCmp);
        const fakeResponse = jest.fn().mockReturnValueOnce(["2", "3"]).mockReturnValueOnce(["1"]);
        return Promise.resolve().then(() => {
            return Promise.resolve();
        }).then(() => {
            questionnaireCmp.shadowRoot.querySelector("c-question").getSelectedAnswers = fakeResponse;
            questionnaireCmp.shadowRoot.querySelector("lightning-button[data-id='next']").click();
            jest.runAllTimers();
        }).then(() => {
            questionnaireCmp.shadowRoot.querySelector("c-question").getSelectedAnswers = fakeResponse;
            questionnaireCmp.shadowRoot.querySelector("lightning-button[data-id='next']").click();
        }).then(() => {
            const questionWithSelectedAnswers = questionnaireCmp.getQuestionsWithSelectedAnswers();
            expect(questionWithSelectedAnswers[0].selectedAnswers).toEqual(["2", "3"]);
            expect(questionWithSelectedAnswers[1].selectedAnswers).toEqual(["1"]);
        });
    });

    it("should preserve selected answers", () => {
        const questionnaireCmp = createElement("c-questionnaire", {
            is: Questionnaire
        });
        document.body.appendChild(questionnaireCmp);
        const fakeResponse = jest.fn().mockReturnValueOnce(["2", "3"]);

        return Promise.resolve().then(() => {
            return Promise.resolve();
        }).then(() => {
            questionnaireCmp.shadowRoot.querySelector("c-question").getSelectedAnswers = fakeResponse;
            questionnaireCmp.shadowRoot.querySelector("lightning-button[data-id='next']").click();
            jest.runAllTimers();
        }).then(() => {
            questionnaireCmp.shadowRoot.querySelector("lightning-button[data-id='previous']").click();
            jest.runAllTimers();
        }).then(() => {
            const questionWithSelectedAnswers = questionnaireCmp.getQuestionsWithSelectedAnswers();
            expect(questionWithSelectedAnswers[0].selectedAnswers).toEqual(["2", "3"]);
        });
    });

    it("should display summary screen", () => {
        const questionnaireCmp = createElement("c-questionnaire", {
            is: Questionnaire
        });
        
        document.body.appendChild(questionnaireCmp);

        return Promise.resolve().then(() => {
            return Promise.resolve();
        }).then(() => {
            questionnaireCmp.shadowRoot.querySelector("lightning-button[data-id='next']").click();
            jest.runAllTimers();
        }).then(() => {
            questionnaireCmp.shadowRoot.querySelector("lightning-button[data-id='next']").click();
            jest.runAllTimers();
        }).then(() => {
            questionnaireCmp.shadowRoot.querySelector("lightning-button[data-id='next']").click();
            jest.runAllTimers();
        }).then(() => {
            const summaryButton = questionnaireCmp.shadowRoot.querySelector("lightning-button[data-id='summary']");
            expect(summaryButton).toBeTruthy();
            summaryButton.click();
        }).then(() => {
            const summary = questionnaireCmp.shadowRoot.querySelector(".summary-screen");
            expect(summary).toBeTruthy();
        });
    });
});
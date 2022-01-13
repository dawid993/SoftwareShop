import { createElement } from "lwc";
import QuestionSliderAnswer from "c/questionSliderAnswer";
import questionCompoundTest from "c/questionTestData";

describe("c-question-slider-answer", () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it("should setup slider properly", () => {
        const element = createElement("c-question-slider-answer", {
            is: QuestionSliderAnswer
        });
        element.answers = questionCompoundTest[2].answers;
        document.body.appendChild(element);
        return Promise.resolve().then(() => {
            expect(
                element.shadowRoot.querySelector("lightning-slider").max
            ).toBe(questionCompoundTest[2].answers[0].max);
            expect(
                element.shadowRoot.querySelector("lightning-slider").value
            ).toBe(0);
            expect(
                element.shadowRoot.querySelector("lightning-slider").min
            ).toBe(questionCompoundTest[2].answers[0].min);
        });
    });

    it("should set default values when answers are improper", () => {
        const element = createElement("c-question-slider-answer", {
            is: QuestionSliderAnswer
        });
        element.answers = [];
        document.body.appendChild(element);
        return Promise.resolve().then(() => {
            expect(
                element.shadowRoot.querySelector("lightning-slider").max
            ).toBe(100);
            expect(
                element.shadowRoot.querySelector("lightning-slider").value
            ).toBe(0);
            expect(
                element.shadowRoot.querySelector("lightning-slider").min
            ).toBe(0);
        });
    });

    it("should set default values when answers are improper - scenario 2", () => {
        const element = createElement("c-question-slider-answer", {
            is: QuestionSliderAnswer
        });
        element.answers = undefined;
        document.body.appendChild(element);
        return Promise.resolve().then(() => {
            expect(
                element.shadowRoot.querySelector("lightning-slider").max
            ).toBe(100);
            expect(
                element.shadowRoot.querySelector("lightning-slider").value
            ).toBe(0);
            expect(
                element.shadowRoot.querySelector("lightning-slider").min
            ).toBe(0);
        });
    });

    it("should set slider value and return correct answer", () => {
        const element = createElement("c-question-slider-answer", {
            is: QuestionSliderAnswer
        });
        element.answers = questionCompoundTest[2].answers;
        document.body.appendChild(element);
        return Promise.resolve()
            .then(() => {
                const slider =
                    element.shadowRoot.querySelector("lightning-slider");
                slider.dispatchEvent(
                    new CustomEvent("change", {
                        detail: {
                            value: 300
                        }
                    })
                );
                expect(element.getSelectedAnswers()).toEqual([300]);
            })
            .then(() => {
                expect(
                    element.shadowRoot.querySelector("lightning-slider").label
                ).toMatch(/300/);
            });
    });
});

export default function (questions = []) {
    if (questions.length === 0) {
        return {
            currentIndex() {
                return -1;
            },

            hasNext() {
                return false;
            },

            next() {
                return { done: true };
            },

            hasPrevious() {
                return false;
            },

            previous() {
                return { done: true };
            }
        }
    }

    let currentIndex = -1;

    return {
        currentIndex() {
            return currentIndex;
        },

        hasNext() {
            return currentIndex < questions.length - 1;
        },

        next() {
            return currentIndex >= questions.length -1 ? { done: true } : {
                done: false,
                value: questions[++currentIndex]
            }
        },

        hasPrevious() {
            return currentIndex > 0;
        },

        previous() {
            return currentIndex === 0 ? { done: true } : {
                done: false,
                value: questions[--currentIndex]
            }
        }
    }
}
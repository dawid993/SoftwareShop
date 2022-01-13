const questionCompoundTest = Object.freeze([
    {
        content:
            "This is first question. Now we are checking realy long question content to check how does it behave when line break needed. Now we are checking realy long question content to check how does it behave when line break needed? This is first question. Now we are checking realy long question content to check how does it behave when line break needed. Now we are checking realy long question content to check how does it behave when line break needed?",
        type: "MULTI",
        order: 1,
        answers: [
            {
                Id: 1,
                label: "1st answer - now we are extending answer to check how it behaves when answer is long."
            },
            {
                Id: 2,
                label: "2nd answer"
            },
            {
                Id: 3,
                label: "3rd answer - now we are extending answer to check how it behaves when answer is long. 3rd answer - now we are extending answer to check how it behaves when answer is long."
            },
            {
                Id: 4,
                label: "4th answer - now we are extending answer to check how it behaves when answer is long."
            }
        ]
    },
    {
        content:
            "This is second question? Now we are checking realy long question content to check how does it behave when line break needed. Now we are checking realy long question content to check how does it behave when line break needed? This is first question. Now we are checking realy long question content to check how does it behave when line break needed. Now we are checking realy long question content to check how does it behave when line break needed?",
        type: "RADIO",
        order: 2,
        answers: [
            {
                Id: 1,
                label: "1st answer - now we are extending answer to check how it behaves when answer is long."
            },
            {
                Id: 2,
                label: "2nd answer - now we are extending answer to check how it behaves when answer is long."
            },
            {
                Id: 3,
                label: "3rd answer - now we are extending answer to check how it behaves when answer is long."
            },
            {
                Id: 4,
                label: "4th answer"
            }
        ]
    },
    {
        content: "This is third question?",
        type: "SLIDER",
        order: 3,
        step: 1000,
        answers: [
            {
                min: 0,
                max: 500000,
                step: 1000,
                valueType: "GBP"
            }
        ]
    },
    {
        content: "This is fourth question?",
        type: "SLIDER",
        order: 4,
        step: 1000,
        answers: [
            {
                min: 1000,
                max: 500000,
                step: 1000,
                valueType: "GBP"
            }
        ]
    }
]);

export default questionCompoundTest;

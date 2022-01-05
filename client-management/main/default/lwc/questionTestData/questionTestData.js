const questionCompoundTest = Object.freeze([{
    content: "This is first question?",
    type: "MULTI",
    order: 1,
    answers: [
        {
            Id: 1,
            label: "1st answer"
        },
        {
            Id: 2,
            label: "2nd answer"
        },
        {
            Id: 3,
            label: "3rd answer"
        },
        {
            Id: 4,
            label: "4th answer"
        }
    ]
},
{
    content: "This is second question?",
    type: "RADIO",
    order: 2,
    answers: [
        {
            Id: 1,
            label: "1st answer"
        },
        {
            Id: 2,
            label: "2nd answer"
        },
        {
            Id: 3,
            label: "3rd answer"
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
    step : 1000,
    answers: [{
        min : 0,
        max : 500000,
        step : 1000,
        valueType : "GBP"
    }],
},
{
    content: "This is fourth question?",
    type: "SLIDER",
    order: 4,
    step : 1000,
    answers: [{
        min : 1000,
        max : 500000,
        step : 1000,
        valueType : "GBP"
    }],
}]);

export default questionCompoundTest;

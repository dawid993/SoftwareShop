@isTest
public with sharing class QuestionnaireUnitTest {
    private static Map<Id, Questionnaire> getTestQuestionnaires() {
        final Id fakeId = fflib_IDGenerator.generate(Account.getSObjectType());
        final Id fakeId2 = fflib_IDGenerator.generate(Account.getSObjectType());

        final String questionText1 = 'Question 1 ?';
        final String questionText2 = 'Question 2 ?';

        final Id fakeId3 = fflib_IDGenerator.generate(Account.getSObjectType());
        final Id fakeId4 = fflib_IDGenerator.generate(Account.getSObjectType());

        final String answerText1 = 'First answer.';
        final String answerText2 = 'Second answer.';

        QuestionAnswer answer1 = new QuestionAnswer(fakeId, answerText1);
        QuestionAnswer answer2 = new QuestionAnswer(fakeId2, answerText2);

        Question question1 = new Question(
            fakeId,
            questionText1,
            new List<QuestionAnswer>{ answer1, answer2 },
            QuestionType.MULTI
        );

        Question question2 = new Question(
            fakeId,
            questionText1,
            new List<QuestionAnswer>{ answer1, answer2 },
            QuestionType.MULTI
        );

        Question question3 = new Question(
            fakeId,
            questionText1,
            new List<QuestionAnswer>{ answer1, answer2 },
            QuestionType.SLIDER
        );

        Question question4 = new Question(
            fakeId,
            questionText1,
            new List<QuestionAnswer>{ answer1, answer2 },
            QuestionType.RADIO
        );

        final Id fakeId5 = fflib_IDGenerator.generate(Account.getSObjectType());
        final Id fakeId6 = fflib_IDGenerator.generate(Account.getSObjectType());

        final String questionnaireTitle1 = 'First.';
        final String questionnaireTitle2 = 'Second.';

        Questionnaire questionnaire1 = new Questionnaire(
            fakeId5,
            questionnaireTitle1,
            new List<Question>{ question1, question2 }
        );

        Questionnaire questionnaire2 = new Questionnaire(
            fakeId6,
            questionnaireTitle2,
            new List<Question>{ question3, question4 }
        );

        return new Map<Id, Questionnaire>{
            fakeId5 => questionnaire1,
            fakeId6 => questionnaire2
        };
    }

    private static QuestionnaireDataProvider getDataProviderStub(
        final Map<Id, Questionnaire> testQuestionnaires
    ) {
        return new QuestionnaireDataProviderStub(testQuestionnaires);
    }

    @isTest
    public static void shouldReturnEqualQuestionnaires() {
        final Map<Id, Questionnaire> testQuestionnaires = getTestQuestionnaires();
        final QuestionnaireDataProvider dataProvider = getDataProviderStub(
            testQuestionnaires
        );
        final QuestionnaireUnit unit = new QuestionnaireFacade()
            .getQuestionnaireUnit(dataProvider);

        for (Id questionnaireId : testQuestionnaires.keySet()) {
            System.assert(
                testQuestionnaires.get(questionnaireId) ==
                unit.getQuestionnaire(questionnaireId),
                'Questionnaires should be equal.'
            );
        }
    }

    @isTest
    public static void shouldReturnNotEqualQuestionnaires() {
        final Map<Id, Questionnaire> testQuestionnaires = getTestQuestionnaires();
        final QuestionnaireDataProvider dataProvider = getDataProviderStub(
            testQuestionnaires
        );
        final QuestionnaireUnit unit = new QuestionnaireFacade()
            .getQuestionnaireUnit(dataProvider);

        for (Id questionnaireId : testQuestionnaires.keySet()) {
            final Questionnaire emptyQuestionnaire = unit.getQuestionnaire(
                fflib_IDGenerator.generate(Account.getSObjectType())
            );
            System.assert(
                testQuestionnaires.get(questionnaireId) != emptyQuestionnaire,
                'Questionnaires should not be equal because unit always returns empty objects.'
            );
        }
    }
}

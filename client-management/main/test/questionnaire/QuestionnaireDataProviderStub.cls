public with sharing class QuestionnaireDataProviderStub implements QuestionnaireDataProvider {
    private final Map<Id, Questionnaire> testQuestionnaires;

    public QuestionnaireDataProviderStub(
        final Map<Id, Questionnaire> testQuestionnaires
    ) {
        this.testQuestionnaires = testQuestionnaires;
    }

    public Questionnaire getById(final Id questionnaireId) {
        return testQuestionnaires.containsKey(questionnaireId)
            ? testQuestionnaires.get(questionnaireId)
            : Questionnaire.getEmpty();
    }
}

public with sharing class QuestionnaireFacade {
    public QuestionnaireUnit getQuestionnaireUnit(
        final QuestionnaireDataProvider dataProvider
    ) {
        return new QuestionnaireUnit(dataProvider);
    }
}

public with sharing class QuestionnaireUnit {
    
    private final QuestionnaireDataProvider questionnaireProvider;
    
    public QuestionnaireUnit(final QuestionnaireDataProvider questionnaireProvider) {
        this.questionnaireProvider = questionnaireProvider;
    }

    public Questionnaire getQuestionnaire(final Id questionnaireId) {
        return questionnaireProvider.getById(questionnaireId);
    }
}

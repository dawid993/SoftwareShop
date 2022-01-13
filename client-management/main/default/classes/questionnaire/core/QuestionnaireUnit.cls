public with sharing class QuestionnaireUnit {
    private final QuestionnaireDataProvider questionnaireProvider;

    public QuestionnaireUnit(
        final QuestionnaireDataProvider questionnaireProvider
    ) {
        if (questionnaireProvider == null) {
            throw new IllegalArgumentException(
                'Empty data provider passed to unit.'
            );
        }

        this.questionnaireProvider = questionnaireProvider;
    }

    public Questionnaire getQuestionnaire(final Id questionnaireId) {
        return questionnaireProvider.getById(questionnaireId);
    }
}

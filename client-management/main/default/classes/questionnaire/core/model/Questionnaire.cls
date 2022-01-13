public with sharing class Questionnaire {
    @AuraEnabled
    public final Id questionnaireId;

    @AuraEnabled
    public final String title;

    @AuraEnabled
    public final List<Question> questions;

    private Questionnaire() {
        this.title = '';
        this.questions = new List<Question>();
    }

    public Questionnaire(
        final Id questionnaireId,
        final String title,
        final List<Question> questions
    ) {
        this.questionnaireId = questionnaireId;
        this.title = title;
        this.questions = questions;
    }

    public Boolean equals(Object obj) {
        if (!(obj instanceof Questionnaire)) {
            return false;
        }

        final Questionnaire questionnaireObj = (Questionnaire) obj;

        return questionnaireId == questionnaireObj.questionnaireId &&
            title == questionnaireObj.title &&
            questions.equals(questionnaireObj.questions);
    }

    public static Questionnaire getEmpty() {
        return new Questionnaire();
    }
}

public with sharing class Questionnaire {
    
    @AuraEnabled 
    public final Id questionnaireId;

    @AuraEnabled    
    public final String title;

    @AuraEnabled
    public final List<Question> questions;

    public Questionnaire(final Id questionnaireId, final String title, final List<Question> questions) {
        this.questionnaireId = questionnaireId;
        this.title = title;
        this.questions = questions;
    }
}

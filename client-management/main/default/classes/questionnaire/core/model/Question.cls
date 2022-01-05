public with sharing class Question {
    
    @AuraEnabled
    public final Id questionId {private set; get;}

    @AuraEnabled
    public final String question {private set; get;}    

    @AuraEnabled
    public final List<QuestionAnswer> answers {private set; get;}

    @AuraEnabled
    public final QuestionType questionType {private set; get;}

    public Question(final Id questionId,final String question, final List<QuestionAnswer> answers, final QuestionType questionType) {
        this.questionId = questionId;
        this.question = question;
        this.answers = answers;
        this.questionType = questionType;
    }

    public Boolean equals(Object obj) {
        if (!(obj instanceof Question)) {
            return false;
        }

        final Question questionObj = (Question) obj;
        
        return questionId == questionObj.questionId &&
                question == questionObj.question &&
                questionType == questionObj.questionType &&
                answers.equals(questionObj.answers);
    }
}

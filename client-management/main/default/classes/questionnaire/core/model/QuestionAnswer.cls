public with sharing class QuestionAnswer {

    @AuraEnabled
    public final Id answerId {private set; get;}

    @AuraEnabled
    public final String answer {private set; get;}

    public QuestionAnswer(final Id answerId, final String answer) {
        this.answerId = answerId;
        this.answer = answer;
    }

    public Boolean equals(Object obj) {
        if (!(obj instanceof QuestionAnswer)) {
            return false;
        }

        final QuestionAnswer answerObj = (QuestionAnswer) obj;
        
        return answerId == answerObj.answerId && answer == answerObj.answer;
    }
}

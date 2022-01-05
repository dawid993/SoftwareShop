@IsTest
public with sharing class QuestionnaireModelEqualityTest {
    
    @IsTest
    public static void answersShouldBeEqual() {
        final Id fakeId = fflib_IDGenerator.generate(Account.getSObjectType());
        final Id fakeId2 = fflib_IDGenerator.generate(Account.getSObjectType());

        final String answerText1 = 'First answer.';
        final String answerText2 = 'Second answer.';

        QuestionAnswer answer1 = new QuestionAnswer(fakeId, answerText1);
        QuestionAnswer answer2 = new QuestionAnswer(fakeId, answerText1);

        System.assert(answer1 == answer2, 'Both answers should be equal.');

        answer1 = new QuestionAnswer(fakeId, answerText1);
        answer2 = new QuestionAnswer(fakeId2, answerText1);

        System.assert(answer1 != answer2, 'Both answers should be not equal. Ids are different.');

        answer1 = new QuestionAnswer(fakeId, answerText1);
        answer2 = new QuestionAnswer(fakeId, answerText2);

        System.assert(answer1 != answer2, 'Both answers should be not equal. Answers texts are different.');

        answer1 = new QuestionAnswer(fakeId, answerText1);
        answer2 = new QuestionAnswer(fakeId2, answerText2);

        System.assert(answer1 != answer2, 'Both answers should be not equal. Answers texts and ids are different.');
    } 

    @IsTest
    public static void questionsShouldBeDifferent() {
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
            new List<QuestionAnswer> {
                answer1,
                answer2 },
            QuestionType.MULTI
        );

        Question question2 = new Question(
            fakeId,
            questionText1,
            new List<QuestionAnswer> {
                answer1,
                answer2 },
            QuestionType.MULTI
        );

        System.assert(question1 == question2, 'Both questions should be equal.');

        question1 = new Question(
            fakeId,
            questionText1,
            new List<QuestionAnswer> {
                answer1,
                answer2 },
            QuestionType.MULTI
        );

        question2 = new Question(
            fakeId2,
            questionText1,
            new List<QuestionAnswer> {
                answer1,
                answer2 },
            QuestionType.MULTI
        );

        System.assert(question1 != question2, 'Both questions should be not equal. Questions ids are different.');

        question1 = new Question(
            fakeId,
            questionText1,
            new List<QuestionAnswer> {
                answer1,
                answer2 },
            QuestionType.MULTI
        );

        question2 = new Question(
            fakeId,
            questionText2,
            new List<QuestionAnswer> {
                answer1,
                answer2 },
            QuestionType.MULTI
        );

        System.assert(question1 != question2, 'Both questions should be not equal. Questions texts ids are different.');

        question1 = new Question(
            fakeId,
            questionText1,
            new List<QuestionAnswer> {
                answer1,
                answer2 },
            QuestionType.MULTI
        );

        question2 = new Question(
            fakeId,
            questionText1,
            new List<QuestionAnswer> {
                answer2,
                answer2 },
            QuestionType.MULTI
        );

        System.assert(question1 != question2, 'Both questions should be not equal. Answers are different.');

        question1 = new Question(
            fakeId,
            questionText1,
            new List<QuestionAnswer> {
                answer1,
                answer2 },
            QuestionType.MULTI
        );

        question2 = new Question(
            fakeId,
            questionText1,
            new List<QuestionAnswer> {
                answer1,
                answer2 },
            QuestionType.RADIO
        );

        System.assert(question1 != question2, 'Both questions should be not equal. Questions types are different.');

        question1 = new Question(
            fakeId2,
            questionText2,
            new List<QuestionAnswer> {
                answer2,
                answer2 },
            QuestionType.MULTI
        );

        question2 = new Question(
            fakeId,
            questionText1,
            new List<QuestionAnswer> {
                answer1,
                answer2 },
            QuestionType.RADIO
        );

        System.assert(question1 != question2, 'Both questions should be not equal. All fields values are different.');
    }
}

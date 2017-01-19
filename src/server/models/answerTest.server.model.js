import mongoose from 'mongoose'
let AnswerTestSchema = new mongoose.Schema({
    surveyId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Survey'
    },
    questionId: Number,
    content: String
});

mongoose.model('AnswerTest', AnswerTestSchema);

import mongoose from 'mongoose'

let SurveySchema = new mongoose.Schema({
    title: String,
    description: String,
    created: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    count: Number,
    questions: [
        {
            questionId: Number,
            type: Number,
            content: String,
            answers: Array
        }
    ]
})

mongoose.model('Survey', SurveySchema)

import React from 'react'
import {
    MULTIPLE_CHOICE,
    DROPDOWN,
    LINEAR_SCALE,
    PARAGRAPH,
    SHORT_TEXT,
    GRID
} from '../../../../utilities/enum'

import DropdownQuestion from './DropdownQuestion.jsx'
import GridChoiceQuestion from './GridChoiceQuestion.jsx'
import LinearScaleQuestion from './LinearScaleQuestion.jsx'
import MultipleChoiceQuestion from './MultipleChoiceQuestion.jsx'
import ParagraphQuestion from './ParagraphQuestion.jsx'
import ShortTextChoiceQuestion from './ShortTextChoiceQuestion.jsx'

export default class Question extends React.Component {
    constructor() {
        super()
        this.state = {
            questionBody: null
        }
        this.onChangeQuestionType = this.onChangeQuestionType.bind(this)
    }

    questionBody() {
        return this.state.questionBody;
    }

    setQuestionBody(component) {
        this.setState({questionBody: component})
    }

    onChangeQuestionType() {
        let questionType = this.refs.questionType.value;
        switch (questionType) {
            case MULTIPLE_CHOICE:
                this.setQuestionBody(<MultipleChoiceQuestion/>);
                break;
            case DROPDOWN:
                this.setQuestionBody(<DropdownQuestion/>);
                break;
            case LINEAR_SCALE:
                this.setQuestionBody(<LinearScaleQuestion/>);
                break;
            case PARAGRAPH:
                this.setQuestionBody(<ParagraphQuestion/>);
                break;
            case SHORT_TEXT:
                this.setQuestionBody(<ShortTextChoiceQuestion/>);
                break;
            case GRID:
                this.setQuestionBody(<GridChoiceQuestion/>);
                break;
            default:
                this.setQuestionBody("");
                break;
        }
    }

    render() {
        return (
            <div class="row">
                <div class="question-header">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" class="form-control" placeholder="Question" ref="questionContent"/>
                        </div>
                    </div>
                    <div className="col-md-4 col-md-offset-2">
                        <div class="form-group">
                            <select class="form-control" ref="questionType" onChange={this.onChangeQuestionType}>
                                <option defaultValue='none'>Select Type...</option>
                                <option value={MULTIPLE_CHOICE}>Multiple choice</option>
                                <option value={DROPDOWN}>Dropdown</option>
                                <option value={PARAGRAPH}>Paragraph</option>
                                <option value={SHORT_TEXT}>Short text</option>
                                <option value={LINEAR_SCALE}>Linear Scale</option>
                                <option value={GRID}>Multiple choice grid</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="question-body">
                    {this.questionBody()}
                </div>
            </div>
        )
    }
}

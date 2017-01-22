import React from 'react'
import {
    MULTIPLE_CHOICE,
    DROPDOWN,
    LINEAR_SCALE,
    PARAGRAPH,
    SHORT_TEXT,
    CHECKBOX,
    GRID
} from '../../../../utilities/enum'

import DropdownQuestionEdit from './DropdownQuestionEdit.jsx'
import GridChoiceQuestionEdit from './GridChoiceQuestionEdit.jsx'
import LinearScaleQuestionEdit from './LinearScaleQuestionEdit.jsx'
import MultipleChoiceQuestionEdit from './MultipleChoiceQuestionEdit.jsx'
import ParagraphQuestionEdit from './ParagraphQuestionEdit.jsx'
import ShortTextChoiceQuestionEdit from './ShortTextChoiceQuestionEdit.jsx'
import CheckboxQuestionEdit from './CheckboxQuestionEdit.jsx'

export default class QuestionEdit extends React.Component {
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
                this.setQuestionBody(<MultipleChoiceQuestionEdit/>);
                break;
            case DROPDOWN:
                this.setQuestionBody(<DropdownQuestionEdit/>);
                break;
            case LINEAR_SCALE:
                this.setQuestionBody(<LinearScaleQuestionEdit/>);
                break;
            case PARAGRAPH:
                this.setQuestionBody(<ParagraphQuestionEdit/>);
                break;
                // case SHORT_TEXT:
                //     this.setQuestionBody(<ShortTextChoiceQuestionEdit/>);
                //     break;
            case GRID:
                this.setQuestionBody(<GridChoiceQuestionEdit/>);
                break;
            case CHECKBOX:
                this.setQuestionBody(<CheckboxQuestionEdit/>);
                break;
            default:
                this.setQuestionBody("");
                break;
        }
    }

    render() {
        return (
            <div class="row question">
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
                                <option disabled>--------------------------------</option>
                                <option value={PARAGRAPH}>Paragraph</option>
                                <option disabled>--------------------------------</option>
                                <option value={MULTIPLE_CHOICE}>Multiple choice</option>
                                <option value={DROPDOWN}>Dropdown</option>
                                <option value={CHECKBOX}>Checkbox</option>
                                <option disabled>--------------------------------</option>
                                {/* <option value={SHORT_TEXT}>Short text</option> */}
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

import React from 'react'
import TitleDescription from './TestComponent/TitleDescription.jsx'
import QuestionEdit from './TestComponent/QuestionEdit.jsx'

export default class HomePage extends React.Component {
    constructor() {
        super()
        this.state = {
            surveyContent: []
        }
        this.addQuestion = this.addQuestion.bind(this)
        this.addTitleDescription = this.addTitleDescription.bind(this)
        this.addImage = this.addImage.bind(this)
        this.addVideo = this.addVideo.bind(this)
        this.addSection = this.addSection.bind(this)
    }

    componentDidMount() {
        jQuery(window).trigger('resize');
        // let textarea = document.querySelector('textarea');
        // textarea.addEventListener('keydown', autosize);
        //
        // function autosize() {
        //     var el = this;
        //     // setTimeout(function() {
        //     el.style.cssText = 'height:auto; padding:1vw';
        //     // for box-sizing other than "content-box" use:
        //     // el.style.cssText = '-moz-box-sizing:content-box';
        //     el.style.cssText = 'height:' + el.scrollHeight + 'px';
        //     // }, 0);
        // }
    }

    addContent(Component) {
        let surveyContent = this.state.surveyContent;
        let i = surveyContent.length + 1;
        surveyContent.push(React.cloneElement(<Component/>, {key: i}))
        this.setState({surveyContent})
    }

    addQuestion() {
        this.addContent(QuestionEdit)
    }

    addTitleDescription() {
        this.addContent(TitleDescription)
    }

    addImage() {}

    addVideo() {}
    addSection() {}
    render() {
        const {user} = this.props
        console.log('user: ', user)
        return (
            <div class="content-wrapper">
                <section class="content-header">
                    <h1>Dashboard
                        <small>Control panel</small>
                    </h1>
                    <ol class="breadcrumb">
                        <li>
                            <a href="#">
                                <i class="fa fa-dashboard"></i>
                                Home</a>
                        </li>
                        <li class="active">Dashboard</li>
                    </ol>
                </section>

                <section class="content">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 survey-content">
                            {this.state.surveyContent}
                        </div>
                        <div class="col-md-2 function-button">
                            <button class="btn btn-primary btn-add-question" onClick={this.addQuestion}>Add question</button>
                            <button class="btn btn-primary btn-add-title-description" onClick={this.addTitleDescription}>Add title and description</button>
                            <button class="btn btn-primary btn-add-image" onClick={this.addImage}>Add image</button>
                            <button class="btn btn-primary btn-add-video" onClick={this.addVideo}>Add video</button>
                            <button class="btn btn-primary btn-add-section" onClick={this.addSection}>Add section</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

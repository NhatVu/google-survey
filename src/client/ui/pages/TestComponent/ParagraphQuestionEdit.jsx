import React from 'react'

export default class ParagraphQuestionEdit extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {
        let textarea = this.refs.description
        textarea.addEventListener('keydown', function() {
            var el = this;
            // setTimeout(function() {
            el.style.cssText = 'height:auto; padding:1vw';
            // for box-sizing other than "content-box" use:
            // el.style.cssText = '-moz-box-sizing:content-box';
            el.style.cssText = 'height:' + el.scrollHeight + 'px';
            // }, 0);
        });

    }

    render() {
        return (
            <div>
                <div class="form-group">
                    <textarea ref="description" class="form-control description" placeholder="Description" rows="1"></textarea>
                </div>
            </div>
        )
    }
}

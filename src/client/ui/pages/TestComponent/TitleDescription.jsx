import React from 'react'

export default class TitleDescription extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.refs.description.addEventListener('keydown', function() {
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
                    <input type="text" class="form-control" placeholder="Form Title"/>
                </div>
                <div class="form-group">
                    <textarea class="description" class="form-control description" placeholder="Description" rows="2" id="comment"></textarea>
                </div>
            </div>
        )
    }
}

import React from 'react'

export default class TitleDescription extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Form Title"/>
                </div>
                <div class="form-group">
                    <textarea class="form-control description" placeholder="Description" rows="2" id="comment"></textarea>
                </div>
            </div>
        )
    }
}

import React from 'react'

export default class DropdownQuestionEdit extends React.Component {
    constructor() {
        super()

        this.state = {
            options: null
        }

        this.onAddOptionHandle = this.onAddOptionHandle.bind(this)
        // this.onRemoveOptionHandle = this.onRemoveOptionHandle.bind(this)
    }

    componentWillMount() {
        this.setState({options: ["Option 1"]})
    }

    addOneOption(answer, index) {
        return (
            <div class="input-group" key={index}>
                <span class="input-group-addon">
                    {index + 1}.
                </span>
                <input type="text" class="form-control" placeholder="Option" ref="content" value={answer} onChange={this.onOptionChangeHandle.bind(this, index)}/> {this.state.options.length > 1
                    ? <span class="input-group-addon" onClick={this.onRemoveOptionHandle.bind(this, index)}>
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </span>
                    : ""}
            </div>
        )
    }

    addOptions() {
        return this.state.options.map((value, index) => {
            return this.addOneOption(value, index)
        })
    }

    onAddOptionHandle() {
        let options = this.state.options;

        options.push("Option " + (options.length + 1))
        this.setState({options})
    }

    onRemoveOptionHandle(index) {
        let options = this.state.options;
        options.splice(index, 1)
        this.setState({options})
    }

    onOptionChangeHandle(index, e) {
        let options = this.state.options
        options[index] = e.target.value
        this.setState({options})
    }

    render() {
        return (
            <div>
                {this.addOptions()}
                <div class="input-group">
                    <span class="input-group-addon">
                        {this.state.options.length + 1}.
                    </span>
                    <button class="btn btn-primary" onClick={this.onAddOptionHandle}>Add option</button>
                </div>
            </div>
        )
    }
}

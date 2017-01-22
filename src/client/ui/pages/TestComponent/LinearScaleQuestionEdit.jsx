import React from 'react'

export default class LinearScaleQuestionEdit extends React.Component {
    constructor() {
        super()

        // this.onChangeMinLinearScale = this.onChangeMinLinearScale.bind(this);
        this.onChangeLinearScale = this.onChangeLinearScale.bind(this);
        this.onChangeMinLinearScaleContent = this.onChangeMinLinearScaleContent.bind(this)
        this.onChangeMaxLinearScaleContent = this.onChangeMaxLinearScaleContent.bind(this)
        this.state = {
            min: {
                value: 0,
                content: "Option 1"
            },
            max: {
                value: 1,
                content: "Option 2"
            }
        }
    }

    onChangeLinearScale() {
        let min = this.state.min
        let max = this.state.max
        min.value = this.refs.minLinearScale.value
        // min.content = this.refs.minContent.value
        max.value = this.refs.maxLinearScale.value
        // max.content = this.refs.maxContent.value

        this.setState({min, max})

    }

    onChangeMinLinearScaleContent(e) {
        let min = this.state.min
        min.content = e.target.value
        this.setState({min})
    }

    onChangeMaxLinearScaleContent(e) {
        let max = this.state.max
        max.content = e.target.value
        this.setState({max})
    }

    render() {
        const {min, max} = this.state;
        return (
            <div class="row">
                <div className="col-md-2 ">
                    <div class="form-group">
                        <select class="form-control" ref="minLinearScale" onChange={this.onChangeLinearScale}>
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-2 col-md-offset-1">
                    <div class="form-group">
                        <select class="form-control" ref="maxLinearScale" onChange={this.onChangeLinearScale}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={1}>10</option>
                        </select>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div class="input-group">
                    <span class="input-group-addon">
                        {min.value}
                    </span>
                    <input type="text" class="form-control" ref="minContent" value={min.content} onChange={this.onChangeMinLinearScaleContent}/>
                </div>
                <div class="input-group">
                    <span class="input-group-addon">
                        {max.value}
                    </span>
                    <input type="text" class="form-control" ref="maxContent" value={max.content} onChange={this.onChangeMaxLinearScaleContent}/>
                </div>
            </div>
        )
    }
}

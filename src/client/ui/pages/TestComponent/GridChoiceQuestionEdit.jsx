import React from 'react'

export default class GridChoiceQuestionEdit extends React.Component {
    constructor() {
        super()

        this.state = {
            rows: ['Row 1'],
            columns: ['Column 1']
        }

        this.onAddRowOptionHandle = this.onAddRowOptionHandle.bind(this)
        this.onAddColumnOptionHandle = this.onAddColumnOptionHandle.bind(this)
        // this.onRemoveOptionHandle = this.onRemoveOptionHandle.bind(this)
    }

    addOneRowOption(row, index) {
        return (
            <div class="input-group" key={index}>
                <span class="input-group-addon">
                    Row {index + 1}.
                </span>
                <input type="text" class="form-control" placeholder="Option" ref="content" value={row} onChange={this.onRowOptionChangeHandle.bind(this, index)}/> {this.state.rows.length > 1
                    ? <span class="input-group-addon" onClick={this.onRemoveRowOptionHandle.bind(this, index)}>
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </span>
                    : ""}
            </div>
        )
    }

    addRowOptions() {
        return this.state.rows.map((row, index) => {
            return this.addOneRowOption(row, index)
        })
    }

    onAddRowOptionHandle() {
        let rows = this.state.rows;

        rows.push("Row " + (rows.length + 1))
        this.setState({rows})
    }

    onRemoveRowOptionHandle(index) {
        let rows = this.state.rows;
        rows.splice(index, 1)
        this.setState({rows})
    }

    onRowOptionChangeHandle(index, e) {
        let rows = this.state.rows
        rows[index] = e.target.value
        this.setState({rows})
    }

    // columns
    addOneColumnOption(column, index) {
        return (
            <div class="input-group" key={index}>
                <span class="input-group-addon">
                    Column {index + 1}.
                </span>
                <input type="text" class="form-control" placeholder="Option" ref="content" value={column} onChange={this.onColumnOptionChangeHandle.bind(this, index)}/> {this.state.columns.length > 1
                    ? <span class="input-group-addon" onClick={this.onRemoveColumnOptionHandle.bind(this, index)}>
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </span>
                    : ""}
            </div>
        )
    }

    addColumnOptions() {
        return this.state.columns.map((column, index) => {
            return this.addOneColumnOption(column, index)
        })
    }

    onAddColumnOptionHandle() {
        let columns = this.state.columns;

        columns.push("Column " + (columns.length + 1))
        this.setState({columns})
    }

    onRemoveColumnOptionHandle(index) {
        let columns = this.state.columns;
        columns.splice(index, 1)
        this.setState({columns})
    }

    onColumnOptionChangeHandle(index, e) {
        let columns = this.state.columns
        columns[index] = e.target.value
        this.setState({columns})
    }

    render() {
        return (
            <div className="row">

                <div class="col-md-6">
                    {this.addRowOptions()}
                    <div class="input-group">
                        <span class="input-group-addon">
                            Row {this.state.rows.length + 1}.
                        </span>
                        <button class="btn btn-primary" onClick={this.onAddRowOptionHandle}>Add option</button>
                    </div>
                </div>
                <div class="col-md-6">
                    {this.addColumnOptions()}
                    <div class="input-group">
                        <span class="input-group-addon">
                            Column {this.state.rows.length + 1}.
                        </span>
                        <button class="btn btn-primary" onClick={this.onAddColumnOptionHandle}>Add option</button>
                    </div>
                </div>
            </div>
        )
    }
}

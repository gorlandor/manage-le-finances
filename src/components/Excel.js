import React, { Component } from 'react';

class Excel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "data": props.data,
      "sortby": null,
      "descending": false
    };
    this._sort = this._sort.bind(this);
  }
  componentDidMount() {
    console.info('Excel state @componentDidMount: ', this.state);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ "data": nextProps.data });
  }  
  // componentWillUpdate(nextProps, nextState) {
  //   console.info('Excel @componentWillUpdate: ', {
  //     nextProps, nextState
  //   });
  // }  
  _sort(event) {
    let column = event.target.cellIndex;
    let data = Array.from(this.state.data);
    let descending = this.state.sortby === column && !this.state.descending;
    data.sort((a, b) => descending
      ? (a[column] < b[column] ? 1 : -1)
      : (a[column] > b[column] ? 1 : -1));
    this.setState({ "data": data, "sortby": column, "descending": descending });
    console.log({ "data": data, "sortby": this.props.headers[column], "descending": descending });
  }
  render() {
    return (
      <table className='table'>

        <thead className='table__header' onClick={this._sort}>
          <tr>
            {this.props.headers.map((title, i, arr) => {
              if (this.state.sortby === i) {
                title += this.state.descending ? '\u2191' : '\u2193';
              }
              return (<th id={`th--${i}`}>{title}</th>);
            })}
          </tr>
        </thead>

        <tbody className='table__body'>
          {this.state.data.map((row, rowId, arr) => (
            <tr id={`row--${rowId}`} key={rowId}>
              {row.map((cell, cellId, arr) => (
                <td data-row={`row--${rowId}`} key={cellId}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    );
  }
}

export default Excel;
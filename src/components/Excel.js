// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
type Props = {
  headers: Array<string>,
  data: Array<any>
};
type State = {
  data: Array<any>,
  sortby: string,
  descending: boolean
};
class Excel extends Component {
  state: State;
  _sort: Function;
  constructor(props: Props) {
    super(props);
    this.state = {
      "data": props.data,
      "sortby": '',
      "descending": false
    };
    this._sort = this._sort.bind(this);
  }
  componentWillReceiveProps(nextProps: Props) {
    this.setState({ "data": nextProps.data });
  }
  _sort(event: any) {
    let column = event.target.cellIndex;
    let { data } = this.state;
    let descending = this.state.sortby === column && !this.state.descending;
    data.sort((a, b) => descending
      ? (a[column] < b[column] ? 1 : -1)
      : (a[column] > b[column] ? 1 : -1));
    this.setState({ data, "sortby": column, descending });
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
Excel.propTypes = {
  headers: PropTypes.array.isRequired,
  data: PropTypes.array
};
export default Excel;
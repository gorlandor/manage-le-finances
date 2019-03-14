import * as React from 'react';
import { IDataRow, IDataTableProps } from '../models/DataTable.interface';

class Excel extends React.Component<IDataTableProps> {
  
  constructor(props: IDataTableProps) {
    super(props);

    this.state = {
      data: props.data,
      sortby: null,
      descending: false
    };
  }

  /**
   * componentWillReceiveProps
   */
  public componentWillReceiveProps(nextProps: IDataTableProps) {
    this.setState({ data: nextProps.data });
  }

  /**
   * render
   */
  public render() {
    
    let { headers, data, category, recurrence } = this.props;

    let headerCells = headers.map((header, i, arr) => (
      <th key={`th--${i}`}>{header}</th>
    ));    

    let rows = data.filter(row => {
      return (category === "" || row.values[1] === category)
        && (recurrence === null || recurrence === "" || row.values[4] === recurrence)
    }).map((row, rowId, arr) => {
      const expenseDueDate = new Date(row.values[2]);
      const currentDate = new Date(new Date().setHours(0,0,0,0))
      const colourStyle = expenseDueDate > currentDate ? "blue"
        : expenseDueDate < currentDate ? "rgb(173, 13, 76)"
        : "black";

      return (
        <tr key={row.key}>
          {
            row.values.map((cell, cellId) => (
              <td key={cellId} style={cellId === 2 ? {color: colourStyle} : {color: "black"}}>
  
                {cell}
  
              </td>
            ))
          }
        </tr>
      )
    });

    return (
      <table className='table'>
        
        <thead className='table__header'>
          <tr>
            {headerCells}
          </tr>
        </thead>

        <tbody className='table__body'>
          {rows}
        </tbody>

      </table>
    );

  }


}
export default Excel;
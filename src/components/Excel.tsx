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
    
    let { headers, data } = this.props;

    let headerCells = headers.map((header, i, arr) => (
      <th key={`th--${i}`}>{header}</th>
    ));    

    let rows = data.map((row, rowId, arr) => (
      <tr key={row.key}>
        {
          row.values.map((cell, cellId) => (
            <td key={cellId}>

              {cell}

            </td>
          ))
        }
      </tr>
    ));

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
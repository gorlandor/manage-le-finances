import { compareDesc, isFuture, isPast, isThisWeek, format } from 'date-fns';
import * as React from 'react';
import { IDataTableProps } from '../models/DataTable.interface';
import { ExpenseTimeliness } from '../models/Expense.interface';

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
    
    let { headers, data, category, recurrence, timeliness } = this.props;

    let headerCells = headers.map((header, i, arr) => (
      <th key={`th--${i}`}>{header}</th>
    ));    

    let rows = data.filter(row => {
      const expenseDueDate = new Date(row.values[2]);
      
      return (category === "" || row.values[1] === category)
        && (recurrence === null || recurrence === "" || row.values[4] === recurrence)
        && (timeliness === ExpenseTimeliness.Any 
          || (timeliness === ExpenseTimeliness.DueSoon && isThisWeek(expenseDueDate))
          || (timeliness === ExpenseTimeliness.Overdue && isPast(expenseDueDate)))

    }).sort((a:any, b: any) => {
      return compareDesc(a.values[2], b.values[2]);
    })
    .map((row, rowId, arr) => {
      const expenseDueDate = new Date(row.values[2]);      
      const colourStyle = isFuture(expenseDueDate) ? "blue"
        : isPast(expenseDueDate) ? "rgb(173, 13, 76)"
        : "black";

      return (
        <tr key={row.key}>
          {
            row.values.map((cell, cellId) => (
              <td key={cellId} style={cellId === 2 ? {color: colourStyle} : {color: "black"}}>
  
                {cellId === 2 ? format(cell, "MMM Do, YYYY") : cell}
  
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
import { compareDesc, isFuture, isPast, isThisWeek, format, isToday } from 'date-fns';
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

    const columns = {
      amount: 0,
      amount_paid: 1,
      category: 2,
      due_date: 3,
      recurrence: 5
    }

    let rows = data.filter(row => {
      const expenseDueDate = new Date(row.values[columns.due_date]);

      const paidOff = parseFloat(row.values[columns.amount]) - parseFloat(row.values[columns.amount_paid]) === 0;
      
      return (category === "" || row.values[columns.category] === category)
        && (recurrence === null || recurrence === "" || row.values[columns.recurrence] === recurrence)
        && (timeliness === ExpenseTimeliness.Any 
          || (timeliness === ExpenseTimeliness.DueSoon && isThisWeek(expenseDueDate))
          || (timeliness === ExpenseTimeliness.Overdue && isPast(expenseDueDate) && !paidOff));
    })
    .sort((a:any, b: any) => {
      return compareDesc(a.values[columns.due_date], b.values[columns.due_date]);
    })
    .map(row => {
      const expenseDueDate = new Date(row.values[columns.due_date]);      
      
      const paidOff = parseFloat(row.values[columns.amount]) - parseFloat(row.values[columns.amount_paid]) === 0;
      
      const colourStyle = isFuture(expenseDueDate) ? "blue"
        : isToday(expenseDueDate) ? "black"
        : isPast(expenseDueDate) && paidOff ? "#015a43" 
        : "#ad0d4c";

      return (
        <tr key={row.key}>
          {
            row.values.map((cell, cellId) => (
              <td key={cellId} 
                style={{color: (cellId === columns.due_date || cellId === columns.amount_paid) ? colourStyle : "black"}}>
  
                {cellId === columns.due_date ? format(cell, "MMM Do, YYYY") : cell}
  
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
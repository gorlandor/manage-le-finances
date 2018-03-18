import * as React from 'react';
import { Link } from 'react-router-dom';
import * as firebaseConfig from '../firebase.config';
import { IDataRow } from '../models/DataTable.interface';
import Excel from './Excel';

class List extends React.Component {
  state: {
    "headers": string[],
    "rows": any[]
  }
  constructor(props: any) {
    super(props);
    this.state = {
      headers: ['Amount', 'DueDate', 'Name', 'Recurrence', 'SharedWith', 'Delete'],
      rows: []
    }
  }

  /**
   * _removeRow
   */
  private _removeRow = (key: string, i: number) => {
    if (window.confirm(`Delete item from list? This cannot be undone.`)) {

      let { rows } = this.state;

      firebaseConfig.expensesRef(key).remove()
        .then(() => {

          this.setState({
            'rows': [
              ...rows.slice(0, i),
              ...rows.slice(i + 1)
            ]
          });

        })
        .catch((error) => console.warn(`Error removing entry`, error));

      let { uid } = JSON.parse(window.localStorage.getItem("authState")!);

      firebaseConfig.userExpensesRef(uid, key).remove()
        .then(() => console.log(`Deleted entry ${uid}/${key}`))
        .catch((error) => console.warn(`Error removing entry`, error));

    }
  }

  /**
   * componentDidMount
   */
  public componentDidMount() {
    let { uid } = JSON.parse(window.localStorage.getItem("authState")!);

    firebaseConfig.userExpensesRef(uid, '').on('value', snapshot => {
      const keys = Object.keys(snapshot!.val());

      let expenses = keys.map(key => snapshot!.val()[key]);

      let dataRows: IDataRow[];

      dataRows = keys.map((uid, rowId, arr) => {
        return {
          key: uid,
          values: [
            ...Object.keys(expenses[rowId])
              .map(key => expenses[rowId][key]),

            <button
              className="btn-delete"
              onClick={() => this._removeRow(uid, rowId)}
            >x</button>
          ],
          editable: true,
          removable: true
        };
      })

      // let rows = keys.map((uid, rowId, arr) => (
      //   <tr key={uid}>{
      //     [
      //       ...Object.keys(expenses[rowId]).map((key, cellId) => (

      //         <td key={`${uid}__cell--${cellId}`}>
      //           {expenses[rowId][key]}
      //         </td>

      //       )),

      //       <button
      //         className="btn-delete"
      //         onClick={() => this._removeRow(uid, rowId)}
      //       >x</button>
      //     ]
      //   }</tr>
      // ));

      this.setState({ rows: dataRows });

    });
  }

  /**
   * render
   */
  public render() {
    
    return (
      <div className='list-wrapper'>

        <h3 className="flex-around">
          Expenses
          <Link to="/expense-form">Add new</Link>
          <Link to="/logout">Logout</Link>
        </h3>

        <Excel headers={this.state.headers} data={this.state.rows} />
        
      </div>
    )
  }

}

export default List;
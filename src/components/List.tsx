import * as React from "react";
import { Link } from "react-router-dom";
import * as firebaseConfig from "../firebase.config";
import { IDataRow } from "../models/DataTable.interface";
import Excel from "./Excel";

class List extends React.Component<{ uid: string }> {
  state: {
    headers: string[];
    rows: any[];
  };
  constructor(props: any) {
    super(props);
    this.state = {
      headers: [
        "Amount",
        "Category",
        "Due Date",
        "Name",
        "Recurrence",
        "Shared With",
        "Edit",
        "Delete"
      ],
      rows: []
    };
  }

  /**
   * _removeRow
   */
  private _removeRow = (key: string, i: number) => {
    if (window.confirm(`Delete item from list? This cannot be undone.`)) {
      let { rows } = this.state;

      firebaseConfig
        .expensesRef(key)
        .remove()
        .catch(error => console.warn(`Error removing entry`, error));

      let { uid } = this.props;

      firebaseConfig
        .userExpensesRef(uid, key)
        .remove()
        .then(() => {
          this.setState({
            rows: [...rows.slice(0, i), ...rows.slice(i + 1)]
          });
          //console.log(`Deleted entry ${uid}/${key}`)
        })
        .catch(error => console.warn(`Error removing entry`, error));
    }
  };

  /**
   * componentDidMount
   */
  public componentDidMount() {
    let { uid } = this.props;

    firebaseConfig.userExpensesRef(uid, "").on("value", snapshot => {
      const keys = Object.keys(snapshot!.val());

      let expenses = keys.map(key => snapshot!.val()[key]);

      let dataRows: IDataRow[];

      dataRows = keys.map((uid, rowId, arr) => {
        return {
          key: uid,
          values: [
            ...Object.keys(expenses[rowId]).map(key => expenses[rowId][key]),

            <Link className="btn-edit" to={`/expense-form/${uid}`}>
              ✏️
            </Link>,

            <button
              className="btn-delete"
              onClick={() => this._removeRow(uid, rowId)}
            >
              x
            </button>
          ],
          editable: true,
          removable: true
        };
      });

      this.setState({ rows: dataRows });
    });
  }

  /**
   * render
   */
  public render() {
    return (
      <div className="list-wrapper">
        <h3 className="flex-around">
          <Link className={"actionLink"} style={{flex: "2", textAlign: "center"}} to="/expense-list">Expenses</Link>
          <Link className={"actionLink"} style={{flex: "1", textAlign: "center"}} to="/expense-form">Add Expense</Link>
          <Link className={"actionLink"} style={{flex: "1", textAlign: "center"}} to="/category-form">Add Category</Link>
          <Link className={"actionLink"} style={{flex: "1", textAlign: "center"}} to="/logout">Logout</Link>
        </h3>

        <Excel headers={this.state.headers} data={this.state.rows} />
      </div>
    );
  }
}

export default List;

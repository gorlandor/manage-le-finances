import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as firebaseConfig from '../firebase.config';
import Excel from './Excel';
import ExpenseForm from './ExpenseForm';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'headers': ['Amount', 'DueDate', 'Name', 'Recurrence', 'SharedWith', 'Delete'],
      'data': []
    };
    this._removeRow = this._removeRow.bind(this);
  }
  _removeRow(key) {
    if (window.confirm(`Delete item from list? This cannot be undone.`)) {

      let { data } = this.state;
      let i = Number(event.target.id);

      expensesRef(key).remove()
        .then(() => {
          this.setState({
            'data': [
              ...data.slice(0, i),
              ...data.slice(i + 1, data.length)
            ]
          });
        })
        .catch((error) => console.warn(`Error removing entry`, error));

    }
  }
  componentDidMount() {
    let { uid } = JSON.parse(localStorage.getItem("authState"));

    firebaseConfig.userExpensesRef(uid, '').on('child_added', (snapshot) => {

      this.setState({
        'data': [

          ...this.state.data,
          [
            ...Object.values(snapshot.val()),
            <button
              className="btn-delete"
              id={this.state.data.length}
              onClick={() => this._removeRow(snapshot.key)}>x</button>
          ]

        ]
      });

    });

  }
  render() {
    return (
      <div className='list-wrapper'>
        <Excel headers={this.state.headers} data={this.state.data} />
        <ExpenseForm />
      </div>
    );
  }
}

export default List;
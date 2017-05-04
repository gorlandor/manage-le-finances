import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { expensesRef, userRef, userExpensesRef } from '../firebase.config';
import Excel from './Excel';
import ExpenseForm from './ExpenseForm';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'headers': ['Amount', 'DueDate', 'Name', 'Recurrence', 'SharedWith'],
      'data': []
    };
  }
  componentDidMount() {

    expensesRef().on('value', (snapshot) => {

      this.setState({ 'data': [] });

      const store = snapshot.val();

      Object.values(store).map((entry) => {
        this.setState({
          data: [
            ...this.state.data,
            Object.values(entry).map(key => key.toString())
          ]
        });
      });


    }, (error) => {
      console.warn({ error });

    });
  }
  componentWillReceiveProps(nextProps) {
    console.log({ 'fn': 'componentWillReceiveProps', 'params': nextProps });
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
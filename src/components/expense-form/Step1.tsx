import * as React from "react";
import {  
  ExpenseRecurrence,
  IExpenseWizardProps
} from "../../models/Expense.interface";

export function Step1({
  expense_title,
  amount,
  amount_paid,
  amount_remaining,
  due_date,
  category,
  recurrence,
  categories,
  expenseId = "",
  history,  
  onAmountDueChange,
  onAmountPaidChange,
  notifyChange,
  notifyPayoff
}: IExpenseWizardProps) {
  const validateStep = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (amount_paid > amount) {
        alert("Amount paid cannot be greater than the amount due.");
        return;
    }
    else {
        history.push(`/expense-form/2/${expenseId}`);
    }    
  };

  return (
    <React.Fragment>
      <form
        className="login-form flex-container"
        autoComplete="off"
        onSubmit={validateStep}
      >
        <label className="form-label flex-vertically">
          Title
          <input
            className="form-control"
            type="text"
            id="expense_title"
            name="expense_title"
            placeholder="Expense Title"
            onChange={event => notifyChange(event, "text")}
            required
            value={expense_title}
          />
        </label>
        <label className="form-label flex-vertically">
          Amount
          <input
            className="form-control"
            type="number"
            min="0"
            step="0.01"
            id="amount"
            name="amount"
            placeholder="Amount"
            onChange={event => onAmountDueChange(event)}
            required
            value={amount}
          />
        </label>
        <label
          className="form-label flex-vertically"
          style={{ flexDirection: "row", width: "16rem", height: "64px" }}
        >
          Paid Full
          <input
              type="checkbox"
              name="paid_full"
              id="paid_full"
              defaultChecked={amount_remaining === 0}
              onChange={event => notifyPayoff(event)}
            />
          <br />
        </label>
        <label className="form-label flex-vertically">
          Amount Paid
          <input
            className="form-control"
            type="number"
            min="0"
            step="0.01"
            id="amount_paid"
            name="amount_paid"
            placeholder="Amount Paid"
            onChange={event => onAmountPaidChange(event)}
            required
            value={amount_paid}
          />
        </label>
        <label className="form-label flex-vertically">
          Due Date
          <input
            className="form-control"
            type="date"
            id="due_date"
            name="due_date"
            placeholder="YYYY-MM-DD"
            onChange={event => notifyChange(event, "text")}
            required
            value={due_date}
          />
        </label>
        <label className="form-label flex-vertically">
          Category
          <select
            className="form-control"
            name="category"
            id="category"
            onChange={event => notifyChange(event, "text")}
            value={category}
          >
            <option value="">Choose Category</option>
            {categories.map(category => (
              <option value={category}>{category}</option>
            ))}
          </select>
        </label>

        <label className="form-label flex-vertically">
          Recurrence
          <select
            className="form-control"
            name="recurrence"
            id="recurrence"
            onChange={event => notifyChange(event, "text")}
            value={recurrence}
          >
            <option value={ExpenseRecurrence.Once} selected>
              once
            </option>
            <option value={ExpenseRecurrence.Daily}>daily</option>
            <option value={ExpenseRecurrence.Weekly}>weekly</option>
            <option value={ExpenseRecurrence.Monthly}>monthly</option>
            <option value={ExpenseRecurrence.Quarterly}>quarterly</option>
            <option value={ExpenseRecurrence.Semiannually}>
              semiannually
            </option>
            <option value={ExpenseRecurrence.Annually}>annually</option>
          </select>
        </label>

        <button type="submit" className="btn login-btn flex-vertically">
          Continue
        </button>
      </form>
    </React.Fragment>
  );
}

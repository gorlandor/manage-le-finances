import * as React from "react";
import { ExpenseRecurrence } from "../models/Expense.interface";
import * as firebaseConfig from "../firebase.config";

export default class ExpenseFiltersSection extends React.Component {
  state: {
    categories: any[];
    category: string;
    dateFrom: string;
    dateTo: string;
    recurrence: ExpenseRecurrence;
  };

  constructor(props: Object) {
    super(props);

    this.state = {
      categories: [],
      category: "",
      dateFrom: "",
      dateTo: "",
      recurrence: null
    };
  }

  componentDidMount() {
    firebaseConfig.categoriesRef().on("value", snapshot => {
      this.setState({
        categories: Object.keys(snapshot.val())
      });
    });
  }

  handleChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { categories, category, dateFrom, dateTo, recurrence } = this.state;
    const { children } = this.props;

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child as React.ReactElement<any>, { category, recurrence })
    );
    
    return (
      <React.Fragment>
        <ExpenseFilters
          categories={categories}
          category={category}
          dateFrom={dateFrom}
          dateTo={dateTo}
          recurrence={recurrence}
          onChange={this.handleChange}
        />
        {childrenWithProps}
      </React.Fragment>
    );
  }
}

function ExpenseFilters({
  categories,
  category,
  dateFrom,
  dateTo,
  recurrence,
  onChange
}: {
  categories: any[];
  category: string;
  dateFrom: string;
  dateTo: string;
  recurrence: ExpenseRecurrence;
  onChange: (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
}) {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <label className="form-label flex-vertically">
          Category
          <select
            style={{ border: "1px solid #673AB7" }}
            className="form-control"
            name="category"
            id="category"
            onChange={onChange}
            value={category}
          >
            <option value="">Any</option>
            {categories.map(category => (
              <option value={category}>{category}</option>
            ))}
          </select>
        </label>

        <label className="form-label flex-vertically">
          Recurrence
          <select
            style={{ border: "1px solid #673AB7" }}
            className="form-control"
            name="recurrence"
            id="recurrence"
            onChange={onChange}
            value={recurrence}
          >
            <option value="">Any</option>
            <option value="once">once</option>
            <option value="daily">daily</option>
            <option value="weekly">weekly</option>
            <option value="monthly">monthly</option>
            <option value="quarterly">quarterly</option>
            <option value="semiannually">semiannually</option>
            <option value="annually">annually</option>
          </select>
        </label>
      </div>
    </React.Fragment>
  );
}

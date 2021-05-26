import * as React from "react";
import { ExpenseRecurrence, ExpenseTimeliness } from "../models/Expense.interface";
import * as firebaseConfig from "../firebase.config";
import { v4 as uuidv4 } from 'uuid';
export default class ExpenseFiltersSection extends React.Component {
  state: {
    categories: any[];
    category: string;
    dateFrom: string;
    dateTo: string;
    recurrence: ExpenseRecurrence;
    timeliness: ExpenseTimeliness;
  };

  constructor(props: Object) {
    super(props);

    this.state = {
      categories: [],
      category: "",
      dateFrom: "",
      dateTo: "",
      recurrence: null,
      timeliness: ExpenseTimeliness.Any
    };
  }

  componentDidMount() {
    firebaseConfig.categoriesRef().on("value", (snapshot:any) => {
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
    const { categories, category, dateFrom, dateTo, recurrence, timeliness } = this.state;
    const { children } = this.props;

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child as React.ReactElement<any>, { category, recurrence, timeliness })
    );
    
    return (
      <React.Fragment>
        <ExpenseFilters
          categories={categories}
          category={category}
          dateFrom={dateFrom}
          dateTo={dateTo}
          recurrence={recurrence}
          timeliness={timeliness}
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
  timeliness,
  onChange
}: {
  categories: any[];
  category: string;
  dateFrom: string;
  dateTo: string;
  recurrence: ExpenseRecurrence;
  timeliness: ExpenseTimeliness;
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
            value={category ?? ""}
          >
            <option value="">Any</option>
            {categories.map((category, i) => (
              <option key={uuidv4()} value={category}>{category}</option>
            ))}
          </select>
        </label>

        <label className="form-label flex-vertically">
          Timeliness
            <select
              style={{ border: "1px solid #673AB7" }}
              className="form-control"
              name="timeliness"
              id="timeliness"
              onChange={onChange}
              value={timeliness ?? ExpenseTimeliness.Any}
            >
              <option value={ExpenseTimeliness.Any}>Any</option>
              <option value={ExpenseTimeliness.Overdue}>overdue</option>
              <option value={ExpenseTimeliness.DueSoon}>due soon</option>
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
            value={recurrence ?? ExpenseRecurrence.Any}
          >
            <option value={ExpenseRecurrence.Any}>Any</option>
            <option value={ExpenseRecurrence.Once}>once</option>
            <option value={ExpenseRecurrence.Daily}>daily</option>
            <option value={ExpenseRecurrence.Weekly}>weekly</option>
            <option value={ExpenseRecurrence.Monthly}>monthly</option>
            <option value={ExpenseRecurrence.Quarterly}>quarterly</option>
            <option value={ExpenseRecurrence.Semiannually}>semiannually</option>
            <option value={ExpenseRecurrence.Annually}>annually</option>
          </select>
        </label>
      </div>
    </React.Fragment>
  );
}

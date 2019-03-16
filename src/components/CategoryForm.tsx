import * as React from "react";
import { Link } from "react-router-dom";
import * as firebaseConfig from "../firebase.config";

enum CategoryStates {
    INITIAL = "",
    CATEGORY_SUBMIT_STARTED = "CATEGORY_SUBMIT_STARTED",
    CATEGORY_SUBMIT_COMPLETE = "CATEGORY_SUBMIT_COMPLETE",
    CATEGORY_SUBMIT_FAILED = "CATEGORY_SUBMIT_FAILED"
}

interface ICategoryForm {
    category_name: string;
    status: CategoryStates;
}

const initialState = {
    category_name: "",
    status: CategoryStates.INITIAL
};

class CategoryForm extends React.Component<{
    uid: string;
    categoryId: string | null;
}> {
    
    state: ICategoryForm = initialState;

    _onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const {
            category_name
        } = this.state;

        this.setState({
            status: CategoryStates.CATEGORY_SUBMIT_STARTED
        });

        try {
            let transaction = firebaseConfig.categoriesRef(category_name).push();

            transaction
                .set(category_name)
                .then(() => {
                    alert("Added successfully!");
                    this.setState(initialState);
                })
                .catch((err: Error) => console.warn({ err }));
        } catch (error) {
            alert(error.message);
        }

    }

    _onChange = (event: React.ChangeEvent<any>) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {

        return (
            <React.Fragment>
                <h3 className="flex-around">                    
                    <Link className={"actionLink"} style={{flex: "2", textAlign: "center"}} to="/category-form">Categories</Link>
                    <Link className={"actionLink"} style={{flex: "1", textAlign: "center"}} to="/expense-list">View list</Link>
                    <Link className={"actionLink"} style={{flex: "1", textAlign: "center"}} to="/expense-form/1">Add Expense</Link>
                    <Link className={"actionLink"} style={{flex: "1", textAlign: "center"}} to="/logout">Logout</Link>
                </h3>
                <form
                    className="login-form flex-container"                    
                    autoComplete="off"
                    onSubmit={this._onSubmit}>
                    <label className="form-label flex-vertically">
                        Category Name
                        <input
                            className="form-control"
                            type="text"
                            id="category_name"
                            name="category_name"
                            placeholder="Category"
                            onChange={this._onChange}
                            required
                            value={this.state.category_name}
                        />
                    </label>
                    {this.state.status === CategoryStates.CATEGORY_SUBMIT_STARTED ? (
                        <button type="submit" className="btn login-btn" disabled>
                          Submiting...
                        </button>
                      ) : (
                        <button type="submit" className="btn login-btn">Submit</button>
                      )}
                </form>
            </React.Fragment>
        );

    }
}

export default CategoryForm;
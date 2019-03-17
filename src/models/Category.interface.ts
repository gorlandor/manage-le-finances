export enum CategoryStates {
    INITIAL = "",
    CATEGORY_SUBMIT_STARTED = "CATEGORY_SUBMIT_STARTED",
    CATEGORY_SUBMIT_COMPLETE = "CATEGORY_SUBMIT_COMPLETE",
    CATEGORY_SUBMIT_FAILED = "CATEGORY_SUBMIT_FAILED"
}

export interface ICategoryForm {
    category_name: string;
    status: CategoryStates;
}
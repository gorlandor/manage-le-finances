import { ExpenseRecurrence, ExpenseTimeliness } from "./Expense.interface";

export interface IDataRow {
  key: string,
  values: any[]
  editable: boolean,
  removable: boolean
};

export interface IDataTableProps {
  headers: string[];
  data: IDataRow[];
  category?: string;
  recurrence?: ExpenseRecurrence | string;
  timeliness?: ExpenseTimeliness | string;
};
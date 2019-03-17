export enum ExpenseRecurrence {
  Any = "",
  Once = "once",
  Daily = "daily",
  Weekly = "weekly",
  Biweekly = "biweekly",
  Monthly = "monthly",
  Quarterly = "quarterly",
  Semiannually = "semiannually",
  Annually = "annually"  
}

export enum ExpenseTimeliness {
  Any = "",
  Overdue = "overdue",
  DueSoon = "due_soon"
}

export interface IExpense {
  amount: number;
  amount_paid: number;
  amount_remaining: number;
  category: string;
  categories: string[];
  due_date: string;
  expense_title: string;
  recurrence: ExpenseRecurrence;
  shared_with: string;
  loading: boolean;
}

export interface IExpenseFormProps {
  email: string;
  uid: string;
  step: number;
  expenseId: string | null;
}

export interface IExpenseWizardProps extends IExpense, IExpenseFormProps {
  categories: string[];
  history: any;
  loading: boolean;
  onAmountDueChange?: (event: React.ChangeEvent<any>) => void;
  onAmountPaidChange?: (event: React.ChangeEvent<any>) => void;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  notifyChange: (
    event: React.ChangeEvent<any>,
    type: "number" | "text"
  ) => void;
  notifyPayoff?: (
    event: React.ChangeEvent<any>,
  ) => void;
}

export const ExpenseInitialState = (email: string) => ({
  amount: 0,
  amount_paid: 0,
  amount_remaining: 0,
  category: "",
  categories: [] as string[],
  due_date: "",
  expense_title: "",
  recurrence: ExpenseRecurrence.Once,
  shared_with: email,
  loading: true
});
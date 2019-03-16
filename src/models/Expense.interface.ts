export enum ExpenseRecurrence {
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
  amount: number,
  category: string,
  categories: string[],
  due_date: string,
  expense_title: string,
  recurrence: ExpenseRecurrence,
  shared_with: string,
  loading: boolean
}
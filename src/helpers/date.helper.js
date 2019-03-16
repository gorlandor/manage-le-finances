const addDays = require("date-fns/add_days");
const addWeeks = require("date-fns/add_weeks");
const addMonths = require("date-fns/add_months");
const addQuarters = require("date-fns/add_quarters");
const addYears = require("date-fns/add_years");
const format = require("date-fns/format");

// for use in demo at the EOF
const currentDate = new Date();

function spreadExpenseDaily(props) {
  const { days, data } = props;
  const currentDate = data.due_date;
  const {uid: linked_to, ...rest} = data;
  let expenses = [];

  expenses.push({
    ...data,
    day: 1,
    due_date: format(addDays(currentDate, 0), "MMM Do YYYY")
  });

  for (let i = 0; i < days; i++) {
    expenses.push({
      ...rest,
      linked_to,
      amount_paid: 0,
      day: i + 1,
      due_date: format(addDays(currentDate, i), "MMM Do YYYY")
    });
  }
  return expenses;
}

function spreadExpenseWeekly(props) {
  const { weeks, data } = props;
  const currentDate = data.due_date;
  const {uid: linked_to, ...rest} = data;
  let expenses = [];

  expenses.push({
    ...data,
    week: 1,
    due_date: format(addWeeks(currentDate, 0), "MMM Do YYYY")
  });

  for (let i = 0; i < weeks; i++) {
    expenses.push({
      ...rest,
      linked_to,
      amount_paid: 0,
      week: i + 1,
      due_date: format(addWeeks(currentDate, i), "MMM Do YYYY")
    });
  }
  return expenses;
}

function spreadExpenseMonthly(props) {
  const { months, data } = props;
  const currentDate = data.due_date;
  const {uid: linked_to, ...rest} = data;
  let expenses = [];

  expenses.push({
    ...data,
    month: 1,
    due_date: format(addMonths(currentDate, 0), "MMM Do YYYY")
  });

  for (let i = 0; i < months; i++) {
    expenses.push({
      ...rest,
      linked_to,
      amount_paid: 0,
      month: i + 1,
      due_date: format(addMonths(currentDate, i), "MMM Do YYYY")
    });
  }
  return expenses;
}

function spreadExpenseQuarterly(props) {
  const { quarters, data } = props;
  const currentDate = data.due_date;
  const {uid: linked_to, ...rest} = data;
  let expenses = [];

  expenses.push({
    ...data,
    month: 1,
    due_date: format(addQuarters(currentDate, 0), "MMM Do YYYY")
  });

  for (let i = 0; i < quarters; i++) {
    expenses.push({
      ...rest,
      linked_to,
      amount_paid: 0,
      month: i + 1,
      due_date: format(addQuarters(currentDate, i), "MMM Do YYYY")
    });
  }
  return expenses;
}

function spreadExpenseSemiannually(props) {
  const { semis, data } = props;
  const currentDate = data.due_date;
  const {uid: linked_to, ...rest} = data;
  let expenses = [];

  expenses.push({
    ...data,
    semi: 1,
    due_date: format(addQuarters(currentDate, 0), "MMM Do YYYY")
  });

  for (let i = 0; i < semis; i++) {
    expenses.push({
      ...rest,
      linked_to,
      amount_paid: 0,
      semi: i + 1,
      due_date: format(addQuarters(currentDate, i * 2), "MMM Do YYYY")
    });
  }
  return expenses;
}

function spreadExpenseAnnually(props) {
  const { years, data } = props;
  const currentDate = data.due_date;
  const {uid: linked_to, ...rest} = data;
  let expenses = [];

  expenses.push({
    ...data,
    year: 1,
    due_date: format(addYears(currentDate, 0), "MMM Do YYYY")
  });

  for (let i = 0; i < years; i++) {
    expenses.push({
      ...rest,
      linked_to,
      amount_paid: 0,
      year: i + 1,
      due_date: format(addYears(currentDate, i), "MMM Do YYYY")
    });
  }
  return expenses;
}

module.exports = {
  spreadExpenseDaily,
  spreadExpenseWeekly,
  spreadExpenseMonthly,
  spreadExpenseQuarterly,
  spreadExpenseSemiannually,
  spreadExpenseAnnually
}

// Example usage

console.log(spreadExpenseDaily({
  days: 31,
  data: {
    uid: "AC-12-DC-56-daily",
    amount: 10,
    amount_paid: 10,
    category: "food",
    due_date: currentDate,
    recurrence: "daily",
    title: "lunch",
  }
}))

console.log(spreadExpenseWeekly({
  weeks: 24,
  data: {
    uid: "AC-12-DC-56-weekly",
    amount: 20,
    amount_paid: 15,
    category: "investment",
    due_date: currentDate,
    recurrence: "weekly",
    title: "weekly savings",
  }
}))

console.log(spreadExpenseMonthly({
  months: 2,
  data: {
    uid: "AC-12-DC-56-monthly",
    amount: 250,
    amount_paid: 250,
    category: "bills",
    due_date: currentDate,
    recurrence: "monthly",
    title: "personal loan"
  }
}))

console.log(spreadExpenseQuarterly({
  quarters: 6,
  data: {
    uid: "AC-12-DC-56-quarterly",
    amount: 800,
    amount_paid: 800,
    category: "taxes",
    due_date: currentDate,
    recurrence: "quarterly",
    title: "Planilla Estimada"
  }
}))

console.log(spreadExpenseSemiannually({
  semis: 3,
  data: {
    uid: "AC-12-DC-56-semiannually",
    amount: 1000,
    amount_paid: 1000,
    category: "travel",
    due_date: currentDate,
    recurrence: "semiannually",
    title: "Vacaciones"
  }
}))

console.log(spreadExpenseAnnually({
  years: 6,
  data: {
    uid: "AC-12-DC-56-annually",
    amount: 120,
    amount_paid: 120,
    category: "car",
    due_date: currentDate,
    recurrence: "annually",
    title: "Marbete"
  }
}))

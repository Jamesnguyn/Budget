import { createStore, combineReducers } from "redux";

const demoState = {
  expenses: [{
    id: '3RAWTAGEZRH',
    description: 'Rent',
    note: 'final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date
    startDate: undefined,
    endDate: undefined
  }
};
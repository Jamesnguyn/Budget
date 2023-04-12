import { createStore, combineReducers } from "redux";
import  uuid from 'uuid';

//ADD EXPENSE
const addExpense = (
  {
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0
  } = {}
  ) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = (id) => ({
  type: 'REMOVE_EPXENSE',
  expense: {
    id: uuid(),
  }
});

// EXPENSES REDUCER
const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return [

      ];
    default:
      return state;
  }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type){
    default:
      return state;
  }
};

//STORE CREATION
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'RENT', amount: 90000 }));
const expenseTwo =store.dispatch(addExpense({ description: 'CAR PAYMENT', amount: 100000 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

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
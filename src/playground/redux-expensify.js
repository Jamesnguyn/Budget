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

//REMOVE EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

//EDIT EXPENSE
const editExpense = ( id, updates ) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

//SET TEXT FILTER
const setTextFilter = (text = '') => ({
  type: 'SERACH_TEXT_FILTER',
  text
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
      return state.filter( ({ id }) => id !== action.id );
    case 'EDIT_EXPENSE':
      return state.map( (expense) => {
        if(expense.id === action.id){
          return {
            ...expense,
            ...action.updates
          }
        }
        else{
          return expense;
        }
      });
    default:
      return state;
  }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type){
    case 'SERACH_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
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

store.dispatch(removeExpense({ id: expenseTwo.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500}));

console.log('settextfilter')
store.dispatch(setTextFilter('RENT123'));
store.dispatch(setTextFilter());

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

const user = {
  name: 'James',
  age: 25
};

console.log({
  ...user,
  location: 'SD',
  age: 30
});
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

//SORT BY AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

//SORT BY DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

//SET START DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

//SET END DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
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
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
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

//store.dispatch(removeExpense({ id: expenseTwo.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500}));

console.log('settextfilter')
store.dispatch(setTextFilter('RENT123'));
store.dispatch(setTextFilter());

console.log('sortby');
store.dispatch(sortByAmount());
store.dispatch(sortByDate());

console.log('setDate');
store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(500));
store.dispatch(setEndDate());

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
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment
 from 'moment';
test('set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});

  expect(state).toEqual([]);
});

test('remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('remove no expenses since id does not exist', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test('add expense', () => {
  const expense ={
    id: 4,
    description: 'gas',
    note: '',
    amount: 5000,
    createdAt: moment(0)
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, expense]);
});

test('edit expense', () => {
  const amount = 2;

  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      amount
    }
  };

  const state = expensesReducer(expenses, action);

  expect(state[0].amount).toBe(amount);
});

test('edit non-existing expense', () => {
  const amount = 2;

  const action = {
    type: 'EDIT_EXPENSE',
    id: '5',
    updates: {
      amount
    }
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});
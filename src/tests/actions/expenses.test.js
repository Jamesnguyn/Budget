import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('remove expense', () => {
  const action = removeExpense({ id: '123abc' });

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('edit expense', () => {
  const action = editExpense(
    '123abc',
    {note: 'abc123'}
  );

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'abc123'
    }
  });
});

test('add expense', () => {
  const expenseData = {
    description: 'Rent',
    amount: 150000,
    createdAt: 1000,
    note: 'April rent'
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('add expense', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      amount: 0,
      createdAt: 0,
      note: ''
    }
  });
});
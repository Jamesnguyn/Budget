import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from '../fixtures/expenses';

test('render ExpenseForm', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('render ExpenseForm with expense data', () => {
const wrapper = shallow(<ExpenseForm expenses={expenses[0]}/>);
expect(wrapper).toMatchSnapshot();
});
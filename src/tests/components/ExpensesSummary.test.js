import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test('render ExpensesSummary with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={235}/>);
  expect(wrapper).toMatchSnapshot();
});

test('render ExpensesSummary with multiple expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expenseTotal={23512340987}/>);
  expect(wrapper).toMatchSnapshot();
});
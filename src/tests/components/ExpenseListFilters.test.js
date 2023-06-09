import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { altFilters, filters } from "../fixtures/filters";
import moment from "moment";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('render ExpenseListFilter', () => {
  expect(wrapper).toMatchSnapshot();
});

test('render ExpenseListFilter with alt data', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('handle text change', () => {
  const value = 'rent';
  wrapper.find('input').simulate('change', {
    target: { value }
  })

  expect(setTextFilter).toHaveBeenCalledWith(value);
});

test('sort by date', () => {
  const value = 'date';
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').simulate('change', {
    target: { value }
  })

  expect(sortByDate).toHaveBeenCalledWith();
});

test('sort by amount', () => {
  const value = 'amount';
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').simulate('change', {
    target: { value }
  })

  expect(sortByAmount).toHaveBeenCalledWith();
});

test('handle changes', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');

  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate })

  expect(setStartDate).toHaveBeenCalledWith(startDate);
  expect(setEndDate).toHaveBeenCalledWith(endDate);
});

test('sort by date focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)

  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
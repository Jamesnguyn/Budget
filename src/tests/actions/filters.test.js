import { 
  setStartDate, 
  setEndDate, 
  setTextFilter, 
  sortByAmount, 
  sortByDate 
} from "../../actions/filters";
import moment from "moment";

test('set start date', () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('set end date', () => {
  const action = setEndDate(moment(1));

  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(1)
  })
});

test('sort by amount', () => {
  const action = sortByAmount();

  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('sort by date', () => {
  const action = sortByDate();

  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('set text filter with value', () => {
  const text = 'rent';
  const action = setTextFilter(text);

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: text
  });
})

test('set text filter without value', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
})
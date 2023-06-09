import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('render header', () => {
  const wrapper = shallow(<Header startLogout={() =>{}}/>);
  expect(wrapper).toMatchSnapshot();
});

test('call startlogout on button click', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout}/>);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});
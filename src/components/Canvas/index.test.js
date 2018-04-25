import React from 'react';
import { shallow } from 'enzyme';
import { Canvas } from './index';
import yAxisValue from '../../reducers/yAxis';
import xAxisValue from '../../reducers/xAxis';

const props = {
  addYaxis: jest.fn(),
  minusYaxis: jest.fn(),
  addXaxis: jest.fn(),
  minusXaxis: jest.fn(),
  yAxisValue: 0,
  xAxisValue: 0,
  clientHeight:1000
};

const ref = {
  canvas:{
    clientHeight: 1000
  }
}

const canvas = shallow(<Canvas {...ref} {...props} />);

describe('<Canvas />', () => {
  it('renders', () => {
    expect(canvas).toMatchSnapshot();
  });

  it('displays the axis from props', () => {
    expect(canvas.find('.redBoxText').text()).toEqual('y: 0, x: 0');
  });
});

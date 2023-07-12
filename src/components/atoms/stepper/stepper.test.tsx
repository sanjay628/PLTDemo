import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Stepper from './stepper.screen';

describe('Stepper', () => {
  it('renders initial value and calls onIncQty and onDecQty handlers', () => {
    const onIncQtyMock = jest.fn();
    const onDecQtyMock = jest.fn();
    const {getByText, getByTestId} = render(
      <Stepper value={3} onIncQty={onIncQtyMock} onDecQty={onDecQtyMock} />,
    );
    const valueTextElement = getByText('3');
    expect(valueTextElement).toBeDefined();

    const decreaseButton = getByTestId('decrease-button');
    fireEvent.press(decreaseButton);
    expect(onDecQtyMock).toHaveBeenCalled();

    const increaseButton = getByTestId('increase-button');
    fireEvent.press(increaseButton);
    expect(onIncQtyMock).toHaveBeenCalled();
  });

  it('renders correctly with value 0', () => {
    const {toJSON} = render(<Stepper />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with custom value', () => {
    const {toJSON} = render(<Stepper value={3} />);
    expect(toJSON()).toMatchSnapshot();
  });
});

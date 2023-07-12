import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CardView from './card.component';
const createTestProps = (props: Object) => ({
  ...props,
});
describe('CardView', () => {
  let props: any;
  beforeEach(() => {
    props = createTestProps({});
  });
  it('renders item name, price, and Stepper component on cart screen', () => {
    const onIncQtyMock = jest.fn();
    const onDecQtyMock = jest.fn();
    const onCartMock = jest.fn();
    const {getByText} = render(
      <CardView
        itemName="Item 1"
        itemPrice="$9.99"
        itemImage="image1.jpg"
        isCartScreen={true}
        onIncQty={onIncQtyMock}
        onDecQty={onDecQtyMock}
        value={2}
        onCart={onCartMock}
      />,
    );

    const itemNameElement = getByText('Item 1');
    expect(itemNameElement).toBeDefined();

    const itemPriceElement = getByText('$9.99');
    expect(itemPriceElement).toBeDefined();

    const stepperValueElement = getByText('2');
    expect(stepperValueElement).toBeDefined();
  });

  it('renders Remove button and calls onDeleteItem handler on cart screen', () => {
    const onDeleteItemMock = jest.fn();
    const onCartMock = jest.fn();
    const {getByText, getByTestId} = render(
      <CardView
        itemName="Item 1"
        itemPrice="$9.99"
        itemImage="image1.jpg"
        isCartScreen={true}
        onDeleteItem={onDeleteItemMock}
        onCart={onCartMock}
      />,
    );

    const removeButton = getByTestId('delete-button');
    expect(removeButton).toBeDefined();
    fireEvent.press(removeButton);
    expect(onDeleteItemMock).toHaveBeenCalled();
  });
  it('renders correctly', () => {
    const tree = render(<CardView {...props} />);
    expect(tree).toMatchSnapshot();
  });
});

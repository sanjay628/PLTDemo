import {render} from '@testing-library/react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CartScreen from './cart.screen';

const createTestProps = (props: Object) => ({
  ...props,
});
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('CartScreen', () => {
  let props: any;
  beforeEach(() => {
    props = createTestProps({});
  });
  const mockDispatch = jest.fn();
  const mockShoppingList = [
    {id: 1, name: 'Item 1', qty: 2, price: 10},
    {id: 2, name: 'Item 2', qty: 1, price: 20},
  ];

  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useSelector as jest.Mock).mockReturnValue({
      shoppingList: mockShoppingList,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the CartScreen component correctly', () => {
    const {getByTestId, getByText} = render(<CartScreen />);
    expect(getByTestId('cart-screen')).toBeDefined();
    expect(getByText('Total ₹30.00')).toBeDefined();
  });
  it('renders correctly', () => {
    const tree = render(<CartScreen {...props} />);
    expect(tree).toMatchSnapshot();
  });
});

import {fireEvent, render} from '@testing-library/react-native';
import axios from 'axios';
import React from 'react';
import {useSelector} from 'react-redux';
import DashboardScreen from './dashboard.screen';

const createTestProps = (props: Object) => ({
  ...props,
});
jest.mock('axios', () => ({
  get: jest.fn(),
}));
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('DashboardScreen', () => {
  let props: any;
  beforeEach(() => {
    props = createTestProps({});
  });
  const mockShoppingList = [
    {id: 1, name: 'Item 1', qty: 2, price: 10},
    {id: 2, name: 'Item 2', qty: 1, price: 20},
  ];

  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue({
      shoppingList: mockShoppingList,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the DashboardScreen component correctly', async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce({data: []});
    const {getByTestId, getByText} = render(<DashboardScreen />);
    expect(getByTestId('dashboard-screen')).toBeDefined();
    expect(getByText('Cart 2')).toBeDefined();
    await Promise.resolve();

    expect(mockedAxios.get).toHaveBeenCalledWith(
      'https://my-json-server.typicode.com/benirvingplt/products/products',
    );
  });

  it('should navigate to the cart screen when the cart view is pressed', () => {
    const navigationMock = {navigate: jest.fn()};
    const {getByTestId} = render(
      <DashboardScreen navigation={navigationMock} />,
    );
    const cartView = getByTestId('cart-view');
    fireEvent.press(cartView);
    expect(navigationMock.navigate).toHaveBeenCalledWith('CartScreen');
  });
  it('renders correctly', () => {
    const tree = render(<DashboardScreen {...props} />);
    expect(tree).toMatchSnapshot();
  });
});

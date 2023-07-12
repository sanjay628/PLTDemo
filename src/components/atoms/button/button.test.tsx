import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from './button.component';
const createTestProps = (props: Object) => ({
  ...props,
});
describe('Button', () => {
  let props: any;
  beforeEach(() => {
    props = createTestProps({});
  });
  it('renders button with label and calls onPress handler', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <Button
        btnLabel="Submit"
        onPress={onPressMock}
        buttonTextColor={'red'}
        buttonColor={'red'}
      />,
    );
    const buttonElement = getByText('Submit');
    expect(buttonElement).toBeDefined();
    fireEvent.press(buttonElement);
    expect(onPressMock).toHaveBeenCalled();
  });

  it('renders disabled button', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <Button
        btnLabel="Submit"
        onPress={onPressMock}
        disable={true}
        buttonTextColor={'red'}
        buttonColor={'red'}
      />,
    );
    const buttonElement = getByText('Submit');
    expect(buttonElement).toBeDefined();
    fireEvent.press(buttonElement);
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('applies custom styles and testID', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <Button
        btnLabel="Submit"
        onPress={onPressMock}
        buttonStyle={{borderRadius: 8}}
        buttonTextColor={'red'}
        buttonColor={'red'}
      />,
    );
    const buttonElement = getByTestId('submit-button');
    expect(buttonElement).toBeDefined();
  });

  it('renders correctly', () => {
    const tree = render(<Button {...props} />);
    expect(tree).toMatchSnapshot();
  });
});

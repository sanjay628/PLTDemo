import React from 'react';
import {render} from '@testing-library/react-native';
import Text from './text.component';
const createTestProps = (props: Object) => ({
  ...props,
});
describe('Text', () => {
  let props: any;
  beforeEach(() => {
    props = createTestProps({});
  });
  it('renders text with default variant and style', () => {
    const {getByText} = render(
      <Text variant="body1" color="red">
        Hello, World!
      </Text>,
    );
    const textElement = getByText('Hello, World!');
    expect(textElement).toBeDefined();
  });

  it('applies custom style and color', () => {
    const {getByText} = render(
      <Text variant="body1" style={{marginBottom: 10}} color="red">
        Custom Text
      </Text>,
    );
    const textElement = getByText('Custom Text');
    expect(textElement).toBeDefined();
  });
  it('renders correctly', () => {
    const tree = render(<Text {...props} />);
    expect(tree).toMatchSnapshot();
  });
});

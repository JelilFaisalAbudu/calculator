import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quotes from '../components/Quotes';

describe('Quotes Component', () => {
  test('renders part text of the Quotes page', () => {
    const { getByText } = render(<Quotes />);
    const text = getByText(/Mathematics is not about numbers,/);

    expect(text).toBeInTheDocument();
    expect(text).toMatchSnapshot();
  });
});

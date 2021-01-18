import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import App from '../components/App';

describe('App', () => {
  test('renders app component', () => {
    render(<App />);
    const textNode = screen.getByText('Let\'s do some math!');
    expect(textNode).toBeInTheDocument();
  });

  test('renders the app component correctly', () => {
    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot();
  });
});

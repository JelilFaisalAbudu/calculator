import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Display from '../components/Display';

afterEach(cleanup);

describe('Display', () => {
  test('displays the current result', () => {
    render(<Display result="45" />);
    const displayResult = screen.getByText('45');
    expect(displayResult).toBeInTheDocument();
  });

  test('Render the display component  correctly', () => {
    const displayTree = renderer.create(<Display />).toJSON();
    expect(displayTree).toMatchSnapshot();
  });
});

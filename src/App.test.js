import { render, screen } from '@testing-library/react';
import App from './App';

//smoke test
test('renders App without crashing', () => {
  render(<App />); 
});

//snapshot test
test('matches snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
})
// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoStream title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoStream/i);
    expect(titleElement).toBeInTheDocument();
});

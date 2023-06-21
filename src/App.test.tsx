import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/Get started/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders email on clicking Get started', () => {
  render(<App />)
  const linkElement = screen.getByText(/Get started/i);
  linkElement.click();
  const email = screen.getByText(/Email/i);
  const emailInput = screen.getByRole('textbox');
  const nextButton = screen.getByText(/Next/);
  expect(email).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();
})

test('renders age on clicking next', () => {
  render(<App />)
  const button = screen.getByText(/Next/i);
  button.click();
  const age = screen.getByText(/Age/i);
  const ageInput = screen.getByRole('textbox');
  const nextButton = screen.getByText(/Next/);
  expect(age).toBeInTheDocument();
  expect(ageInput).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();
})

test('renders summary on clicking next', () => {
  render(<App />)
  const button = screen.getByText(/Next/i);
  button.click();
  const ageButton = screen.getByText(/Next/i);
  ageButton.click();
  const age = screen.getByText(/Age/i);
  const email = screen.getByText(/Email/i);
  expect(age).toBeInTheDocument();
  expect(email).toBeInTheDocument();
})
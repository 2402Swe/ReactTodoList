
import "./App.css";
import Todo from "./components/Todo";
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
function App() {
  return (
    <div className="container">
      <Todo />
    </div>
  );
}

export default App;
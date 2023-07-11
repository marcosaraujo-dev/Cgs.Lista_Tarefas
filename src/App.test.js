import { render, screen } from '@testing-library/react';
import App from './App';

test('Valida renderização do cabeçalho', () => {
    render(<App />);
    const linkElement = screen.getByText(/Lista de Tarefas/i);
    expect(linkElement).toBeInTheDocument();
});

test('Valida renderização do elemento input', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(
        'O que precisa ser feito?'
    );
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('name', 'newTodo');
    expect(inputElement).toHaveAttribute('id', 'newTodo');
});

test('Valida renderização do elemento lista', () => {
    render(<App />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
});

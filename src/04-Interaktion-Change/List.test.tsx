import { fireEvent, render, screen } from '@testing-library/react';
import User from '../User';
import List from './List';

const users: User[] = [
  {
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
  },
  {
    id: 2,
    firstname: 'Jane',
    lastname: 'Doe',
  },
];

describe('List', () => {
  it('should filter the list', () => {
    render(<List users={users} />);

    fireEvent.change(screen.getByTestId('filter'), { target: { value: 'oh' } });

    expect(screen.getAllByTestId('firstname')).toHaveLength(1);
    expect(screen.getByTestId('firstname')).toHaveTextContent('John');
    expect(screen.getByTestId('firstname')).not.toHaveTextContent('Jane');
  });
});

import ListItem from './ListItem';
import { fireEvent, render, screen } from '@testing-library/react';
import User from '../User';

const user: User = {
  id: 1,
  firstname: 'John',
  lastname: 'Doe',
};

describe('ListItem', () => {
  it.each([
    { field: 'id', value: '1' },
    { field: 'firstname', value: 'John' },
    { field: 'lastname', value: 'Doe' },
  ])('ensure $field is $value', ({ field, value }) => {
    render(
      <table>
        <tbody>
          <ListItem user={user} onDelete={jest.fn()} />
        </tbody>
      </table>
    );

    expect(screen.getByTestId(field)).toHaveTextContent(value);
  });

  it('should render correctly', () => {
    render(
      <table>
        <tbody>
          <ListItem user={user} onDelete={jest.fn()} />
        </tbody>
      </table>
    );

    expect(screen.getByTestId('id')).toHaveTextContent('1');
    expect(screen.getByTestId('firstname')).toHaveTextContent('John');
    expect(screen.getByTestId('lastname')).toHaveTextContent('Doe');
    expect(screen.getByTestId('lastname')).toBeInTheDocument();
  });
});

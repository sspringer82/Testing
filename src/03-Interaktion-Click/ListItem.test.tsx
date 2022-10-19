import ListItem from './ListItem';
import User from '../User';
import { fireEvent, render, screen } from '@testing-library/react';

const user: User = {
  id: 1,
  firstname: 'John',
  lastname: 'Doe',
};

describe('ListItem', () => {
  it('should trigger the delete routine if the button is clicked', () => {
    const onDelete = jest.fn();
    render(
      <table>
        <tbody>
          <ListItem user={user} onDelete={onDelete} />
        </tbody>
      </table>
    );

    fireEvent.click(screen.getByTestId('delete-btn'));

    expect(onDelete).toHaveBeenCalled();
    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(onDelete).toHaveBeenCalledWith(1);
  });
});

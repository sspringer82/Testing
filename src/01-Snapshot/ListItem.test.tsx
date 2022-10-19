import ListItem from './ListItem';
import User from '../User';
import { fireEvent, render, screen } from '@testing-library/react';

const user: User = {
  id: 1,
  firstname: 'John',
  lastname: 'Doe',
};

describe('ListItem', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <table>
        <tbody>
          <ListItem user={user} onDelete={jest.fn()} />
        </tbody>
      </table>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

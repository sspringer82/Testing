import { render, renderHook, screen, waitFor } from '@testing-library/react';
import Fetch, { useFetch } from './Fetch';
import User from '../User';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

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

const server = setupServer(
  rest.get('/users', (request, response, context) => {
    return response(context.status(200), context.json(users));
  })
);

describe('Hook Testing', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  describe('direct testing', () => {
    it('should fetch data correctly', async () => {
      const { result } = renderHook(() => useFetch<User>('/users'));

      await waitFor(() => {
        expect(result.current).toHaveLength(2);
      });

      expect(result.current[0].firstname).toBe('John');
      expect(result.current[1].firstname).toBe('Jane');
    });
  });

  describe('via Component', () => {
    it('should fetch data correctly', async () => {
      render(<Fetch />);

      const firstnames = await screen.findAllByTestId('firstname');

      expect(firstnames).toHaveLength(2);
      expect(firstnames[0]).toHaveTextContent('John');
      expect(firstnames[1]).toHaveTextContent('Jane');
    });
    });
  });
});

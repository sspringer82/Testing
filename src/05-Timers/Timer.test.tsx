import { screen, render, fireEvent, act } from '@testing-library/react';
import Timer from './Timer';

describe('Timer', () => {
  it.skip('should work with real timers', async () => {
    render(<Timer />);

    expect(screen.queryByTestId('message')).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId('message-btn'));

    expect(screen.getByTestId('message')).toBeInTheDocument();

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    });
    expect(screen.queryByTestId('message')).not.toBeInTheDocument();
  });

  it('should work with fake timers', () => {
    jest.useFakeTimers();

    render(<Timer />);

    expect(screen.queryByTestId('message')).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId('message-btn'));

    expect(screen.getByTestId('message')).toBeInTheDocument();

    act(() => {
      // jest.runAllTimers();
      jest.advanceTimersByTime(2000);
    });

    expect(screen.queryByTestId('message')).not.toBeInTheDocument();

    jest.useRealTimers();
  });
});

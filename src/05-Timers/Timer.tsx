import { useState } from 'react';

const Timer: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);

  function handleShowMessage() {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  }

  return (
    <>
      <button onClick={() => handleShowMessage()} data-testid="message-btn">
        show message
      </button>
      {showMessage && <div data-testid="message">Hello World</div>}
    </>
  );
};

export default Timer;

import { useState } from 'react';
import { Link } from 'react-router-dom';

const PASSCODE = '1234';

const TopSecret = () => {
  const [input, setInput] = useState('');
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = (event) => {
    event.preventDefault();
    setUnlocked(input === PASSCODE);
  };

  return (
    <main className="page">
      <Link className="back-bubble" to="/">
        Back
      </Link>
      <div className="page__content">
        <h1>Top Secret</h1>
        <p className="page__subtext">Private notes stay behind a passcode.</p>
        {!unlocked ? (
          <form className="secret-form" onSubmit={handleUnlock}>
            <input
              type="password"
              placeholder="Enter passcode"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <button className="ghost-pill" type="submit">
              Unlock
            </button>
          </form>
        ) : (
          <div className="secret-box">Secret content unlocked. Add sensitive notes here.</div>
        )}
      </div>
    </main>
  );
};

export default TopSecret;

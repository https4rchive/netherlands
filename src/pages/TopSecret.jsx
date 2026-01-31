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
      <Link className="back-button" to="/">
        Back
      </Link>
      <div className="page__content">
        <p className="eyebrow">Top Secret</p>
        <h1>Restricted notes</h1>
        {!unlocked ? (
          <form className="secret-form" onSubmit={handleUnlock}>
            <input
              type="password"
              placeholder="Enter passcode"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <button className="pill pill--small" type="submit">
              Unlock
            </button>
          </form>
        ) : (
          <div className="placeholder">
            <p>Secret content unlocked. Add sensitive notes here.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default TopSecret;

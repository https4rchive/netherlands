import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../components/Counter';

const TRIP_DATE = new Date('2026-06-20T00:00:00');

const Countdown = () => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  const daysLeft = useMemo(() => {
    const diff = TRIP_DATE - new Date(now);
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }, [now]);

  return (
    <main className="page page--dark">
      <Link className="back-bubble back-bubble--light" to="/">
        Back
      </Link>
      <div className="page__content">
        <h1>Days until Netherlands trip</h1>
        <p className="page__subtext">Counting down to the next adventure.</p>
        <div className="counter-shell">
          <Counter
            value={daysLeft}
            places={[100, 10, 1]}
            fontSize={110}
            padding={5}
            gap={20}
            textColor="white"
            fontWeight={900}
            digitPlaceHolders
          />
        </div>
      </div>
    </main>
  );
};

export default Countdown;

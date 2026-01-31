import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../components/Counter';

const TRIP_DATE = '2026-06-20';

const Countdown = () => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  const daysLeft = useMemo(() => {
    const tripDate = new Date(`${TRIP_DATE}T00:00:00`);
    const diff = tripDate.getTime() - now;
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }, [now]);

  return (
    <main className="page page--dark">
      <Link className="back-button" to="/">
        Back
      </Link>
      <div className="page__content">
        <p className="eyebrow">Countdown</p>
        <h1>Days until Netherlands trip</h1>
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

import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../components/Counter';

const TRIP_DATE = new Date('2026-02-11T00:00:00');

const Countdown = () => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const timeLeft = useMemo(() => {
    const diff = Math.max(0, TRIP_DATE - new Date(now));
    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
  }, [now]);

  return (
    <main className="page page--dark page--countdown">
      <Link className="back-bubble back-bubble--light" to="/">
        Back
      </Link>
      <div className="page__content">
        <h1>Countdown to Netherlands trip</h1>
        <div className="countdown-grid">
          <div className="countdown-card">
            <Counter
              value={timeLeft.days}
              places={[1000, 100, 10, 1]}
              fontSize={84}
              padding={5}
              gap={12}
              textColor="white"
              fontWeight={900}
              digitPlaceHolders
            />
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-card">
            <Counter
              value={timeLeft.hours}
              places={[10, 1]}
              fontSize={84}
              padding={5}
              gap={12}
              textColor="white"
              fontWeight={900}
              digitPlaceHolders
            />
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-card">
            <Counter
              value={timeLeft.minutes}
              places={[10, 1]}
              fontSize={84}
              padding={5}
              gap={12}
              textColor="white"
              fontWeight={900}
              digitPlaceHolders
            />
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-card">
            <Counter
              value={timeLeft.seconds}
              places={[10, 1]}
              fontSize={84}
              padding={5}
              gap={12}
              textColor="white"
              fontWeight={900}
              digitPlaceHolders
            />
            <span className="countdown-label">Seconds</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Countdown;

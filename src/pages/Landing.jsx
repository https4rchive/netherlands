import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <main className="landing">
      <div className="landing__menu">
        <Link className="pill" to="/countdown">
          COUNTDOWN
        </Link>
        <Link className="pill" to="/memory">
          MEMORY
        </Link>
        <Link className="pill" to="/todo">
          TO DO
        </Link>
        <Link className="pill pill--second-row" to="/top-secret">
          TOP SECRET
        </Link>
      </div>
    </main>
  );
};

export default Landing;

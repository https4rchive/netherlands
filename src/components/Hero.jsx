const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <p className="eyebrow">Netherlands Travel Plan</p>
        <h1>Canals, coastlines, and slow mornings in the lowlands.</h1>
        <p className="hero__subhead">
          A photo-first itinerary blending design, food markets, and time on the water. Built around gentle
          mornings, bike rides, and golden-hour city walks.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#plan">
            View itinerary
          </a>
          <a className="btn btn--ghost" href="#notes">
            Read travel notes
          </a>
        </div>
      </div>
      <div className="hero__media">
        <div className="hero__card hero__card--large">
          <img
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1600&auto=format&fit=crop"
            alt="Amsterdam canal houses"
          />
        </div>
        <div className="hero__card hero__card--small">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop"
            alt="Dutch canal with boats"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

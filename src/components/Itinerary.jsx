const Itinerary = () => {
  return (
    <section className="itinerary" id="plan">
      <div className="section-heading">
        <p className="eyebrow">Projects / Plan</p>
        <h2>7-day outline with time for spontaneous discoveries.</h2>
      </div>
      <div className="itinerary__grid">
        <div className="itinerary__card">
          <h3>Days 1-2 · Amsterdam</h3>
          <p>Canal cruise, Jordaan cafes, museum district, and a slow bike loop through Vondelpark.</p>
          <span>Base: Canal district hotel</span>
        </div>
        <div className="itinerary__card">
          <h3>Day 3 · Zaanse Schans + Haarlem</h3>
          <p>Windmills in the morning, local market lunch, and sunset along Haarlem’s waterways.</p>
          <span>Transit: 30-40 min train</span>
        </div>
        <div className="itinerary__card">
          <h3>Day 4 · Delft</h3>
          <p>Historic core, ceramic studios, and a late afternoon canal walk.</p>
          <span>Must: Nieuwe Kerk view</span>
        </div>
        <div className="itinerary__card">
          <h3>Day 5 · Rotterdam</h3>
          <p>Architecture day: Markthal, Cube Houses, waterfront coffee, and skyline photography.</p>
          <span>Night: riverfront dinner</span>
        </div>
        <div className="itinerary__card">
          <h3>Day 6 · Utrecht</h3>
          <p>Wharf cellar cafes, Dom Tower, and a quiet evening picnic.</p>
          <span>Optional: quick train to castles</span>
        </div>
        <div className="itinerary__card">
          <h3>Day 7 · Lisse / Keukenhof</h3>
          <p>Bike through tulip fields, capture golden hour shots, return to Amsterdam.</p>
          <span>Seasonal visit</span>
        </div>
      </div>
    </section>
  );
};

export default Itinerary;

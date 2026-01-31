const Notes = () => {
  return (
    <section className="notes" id="notes">
      <div className="section-heading">
        <p className="eyebrow">Blog / Notes</p>
        <h2>Short posts to capture the mood.</h2>
      </div>
      <div className="notes__grid">
        <article className="note-card">
          <h3>First impressions from Amsterdam</h3>
          <p>Soft light on the canals, a layered skyline of gables, and coffee spots tucked under bridges.</p>
          <span>Posted: Day 1</span>
        </article>
        <article className="note-card">
          <h3>Modern Rotterdam</h3>
          <p>Brutalist textures, glass bridges, and a surprising amount of calm by the river.</p>
          <span>Posted: Day 5</span>
        </article>
        <article className="note-card">
          <h3>Utrecht at golden hour</h3>
          <p>Two-level canals and soft reflections. Slow, quiet, and perfect for evening shots.</p>
          <span>Posted: Day 6</span>
        </article>
      </div>
    </section>
  );
};

export default Notes;

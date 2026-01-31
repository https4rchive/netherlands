import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import BounceCards from '../components/BounceCards';

const STORAGE_KEY = 'netherlands-trip-plan';
const DAYS = [
  { id: '2026-02-11', label: 'Feb 11 · Day 1' },
  { id: '2026-02-12', label: 'Feb 12 · Day 2' },
  { id: '2026-02-13', label: 'Feb 13 · Day 3' },
  { id: '2026-02-14', label: 'Feb 14 · Day 4 · Valentine’s Day' },
  { id: '2026-02-15', label: 'Feb 15 · Day 5' },
  { id: '2026-02-16', label: 'Feb 16 · Day 6' }
];

const Todo = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [dayId, setDayId] = useState(DAYS[0].id);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (event) => {
    event.preventDefault();
    if (!text.trim()) return;
    setItems((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text: text.trim(),
        done: false,
        dayId,
        imageUrl: imageUrl.trim()
      }
    ]);
    setText('');
    setImageUrl('');
  };

  const toggleItem = (id) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
  };

  const deleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const images = useMemo(() => {
    const urls = items.map((item) => item.imageUrl).filter(Boolean);
    return urls.length
      ? urls.slice(0, 5)
      : [
          'https://picsum.photos/400/400?grayscale',
          'https://picsum.photos/500/500?grayscale',
          'https://picsum.photos/600/600?grayscale',
          'https://picsum.photos/700/700?grayscale',
          'https://picsum.photos/300/300?grayscale'
        ];
  }, [items]);

  const transformStyles = [
    'rotate(5deg) translate(-150px)',
    'rotate(0deg) translate(-70px)',
    'rotate(-5deg)',
    'rotate(5deg) translate(70px)',
    'rotate(-5deg) translate(150px)'
  ];

  const itemsByDay = useMemo(() => {
    return DAYS.reduce((acc, day) => {
      acc[day.id] = items.filter((item) => item.dayId === day.id);
      return acc;
    }, {});
  }, [items]);

  return (
    <main className="page">
      <Link className="back-bubble" to="/">
        Back
      </Link>
      <div className="page__content">
        <h1>Trip Planner</h1>
        <p className="page__subtext">Plan activities day by day, add notes, and attach images.</p>

        <div className="planner-top">
          <BounceCards
            className="custom-bounceCards"
            images={images}
            containerWidth={520}
            containerHeight={260}
            animationDelay={1}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            enableHover={false}
          />
          <form className="todo-form" onSubmit={addItem}>
            <label>
              Day
              <select value={dayId} onChange={(event) => setDayId(event.target.value)}>
                {DAYS.map((day) => (
                  <option key={day.id} value={day.id}>
                    {day.label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Activity
              <input
                type="text"
                placeholder="Add activity"
                value={text}
                onChange={(event) => setText(event.target.value)}
              />
            </label>
            <label>
              Image URL (optional)
              <input
                type="url"
                placeholder="https://..."
                value={imageUrl}
                onChange={(event) => setImageUrl(event.target.value)}
              />
            </label>
            <button className="ghost-pill" type="submit">
              Add
            </button>
          </form>
        </div>

        <div className="planner-grid">
          {DAYS.map((day) => (
            <div key={day.id} className="planner-day">
              <h3>{day.label}</h3>
              <ul className="todo-list">
                {itemsByDay[day.id]?.length ? (
                  itemsByDay[day.id].map((item) => (
                    <li key={item.id} className={`todo-item ${item.done ? 'is-done' : ''}`}>
                      <button type="button" onClick={() => toggleItem(item.id)}>
                        {item.text}
                      </button>
                      <div className="todo-actions">
                        {item.imageUrl && <img className="todo-thumb" src={item.imageUrl} alt="" />}
                        <button type="button" className="todo-delete" onClick={() => deleteItem(item.id)}>
                          Delete
                        </button>
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="todo-empty">No activities yet.</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Todo;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'netherlands-todo';

const Todo = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

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
    setItems((prev) => [...prev, { id: crypto.randomUUID(), text: text.trim(), done: false }]);
    setText('');
  };

  const toggleItem = (id) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
  };

  const deleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <main className="page">
      <Link className="back-bubble" to="/">
        Back
      </Link>
      <div className="page__content">
        <h1>To Do</h1>
        <p className="page__subtext">Keep the pre-trip checklist tidy.</p>
        <form className="todo-form" onSubmit={addItem}>
          <input
            type="text"
            placeholder="Add a task"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <button className="ghost-pill" type="submit">
            Add
          </button>
        </form>
        <ul className="todo-list">
          {items.map((item) => (
            <li key={item.id} className={`todo-item ${item.done ? 'is-done' : ''}`}>
              <button type="button" onClick={() => toggleItem(item.id)}>
                {item.text}
              </button>
              <button type="button" className="todo-delete" onClick={() => deleteItem(item.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Todo;

import { AnimatePresence, motion } from 'motion/react';
import './Counter.css';

const Digit = ({ value }) => {
  return (
    <span className="counter__digit">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const Counter = ({
  value = 0,
  places = [100, 10, 1],
  fontSize = 110,
  padding = 5,
  gap = 20,
  textColor = 'white',
  fontWeight = 900,
  digitPlaceHolders = false
}) => {
  const digits = places.map((place) => {
    const digit = Math.floor((value / place) % 10);
    const isLeading = value < place;
    if (isLeading && !digitPlaceHolders && place !== 1) {
      return null;
    }
    return {
      place,
      digit: isLeading ? 0 : digit
    };
  });

  return (
    <div
      className="counter"
      style={{
        fontSize: `${fontSize}px`,
        gap: `${gap}px`,
        color: textColor,
        fontWeight,
        padding: `${padding}px`
      }}
    >
      {digits.map((item) => (
        <Digit key={item.place} value={item.digit} />
      ))}
    </div>
  );
};

export default Counter;

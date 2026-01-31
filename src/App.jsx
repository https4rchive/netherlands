import BubbleMenu from './components/BubbleMenu';
import Hero from './components/Hero';
import PlacesGrid from './components/PlacesGrid';
import About from './components/About';
import Itinerary from './components/Itinerary';
import Notes from './components/Notes';
import Contact from './components/Contact';
import './App.css';

const menuItems = [
  { label: 'home', href: '#home', ariaLabel: 'Home', rotation: -8, hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' } },
  { label: 'about', href: '#about', ariaLabel: 'About', rotation: 8, hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' } },
  { label: 'projects', href: '#plan', ariaLabel: 'Plan', rotation: 8, hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' } },
  { label: 'blog', href: '#notes', ariaLabel: 'Notes', rotation: 8, hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' } },
  { label: 'contact', href: '#contact', ariaLabel: 'Contact', rotation: -8, hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' } }
];

const App = () => {
  return (
    <div className="app">
      <BubbleMenu
        logo={<span style={{ fontWeight: 700 }}>RB</span>}
        items={menuItems}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={false}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />

      <main>
        <section id="home">
          <Hero />
          <PlacesGrid />
        </section>
        <About />
        <Itinerary />
        <Notes />
        <Contact />
      </main>
    </div>
  );
};

export default App;

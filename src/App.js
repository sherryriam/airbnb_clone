import './styles.css';
import './App.css';
import Navbar from "./Navbar";
import Hero from "./Hero";
import data from "./data";
import Card from "./Card"




function App() {
  const cards = data.map(item =>{
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}
export default App;

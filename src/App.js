import "./App.css";
import Item from "./component/item/Item";
import { categories } from "./helper/Data";
import reactlogo from "./assets/react.svg";


function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="logo-container">
          <img
            src={reactlogo}
            style={{ height: "15%", width: "15%", marginBottom: "2rem" }}
          />
        </div>
        <div className="lang-container">
          <h3 style={{ color: "white", fontSize: "1.5rem", margin: ".5rem" }}>
            Languages
          </h3>
          <div className="card-container">
            {categories.map((card) => (
              <Item key={card.name} card={card} name={card.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

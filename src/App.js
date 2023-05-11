import HomeComponent from "./components/Home";

function App() {
  const myFruits = ["Apple", "Mango", "Guava", "Watermelon"];

  return (
    <div className="App">
      <HomeComponent props1={myFruits} />
    </div>
  );
}

export default App;

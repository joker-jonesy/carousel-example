import Carousel from "./components/Carousel";

function App() {
    const items = [1,2,3]
  return (
    <div className="App">
      <Carousel data={items}/>
    </div>
  );
}

export default App;

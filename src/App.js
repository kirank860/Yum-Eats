import Categories from "./components/Categories";
import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import Meals from "./components/Meals";
import NewsLetter from "./components/NewsLetter";
import TopNav from "./components/TopNav";
import TopPick from "./components/TopPick";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Featured />
      {/* <Delivery/> */}
      <TopPick />
      <Meals />
      <Categories />
      <NewsLetter />
    </div>
  );
}

export default App;

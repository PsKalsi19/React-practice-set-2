import Gadgets from "./Gadgets";
import Greetings from "./Greetings";
import ProductDetails from "./ProductDetails";
import gadgetData from "./gadgetsData";
import "./styles.css";
import UserProfile from "./UserProfile";
import Phones from "./Phones";
import products from "./productsData";
import Article from "./Article";
import About from "./About";
import MyGadgets from "./MyGadgets";
import ColorPicker from "./ColorPicker";
import Todo from "./Todo";
import todoData from "./todoData";
const userData = {
  name: "John",
  age: 25,
  email: "john@example.com"
};
const title = "React is awesome";
const content = "React is a JavaScript library for building user interfaces.";

const heading = "About Me";
const name = "Rounak"; // you can put your name
const learning = "I am learning React JS currently at neoG Camp.";
const red = "#EE4B2B";
const blue = "#89CFF0";
const green = "#7FFFD4";
export default function App() {
  return (
    <div className="App">
      <h1>Set 2</h1>
      <Greetings name={"Rounak"} />
      <ProductDetails name={"TWS"} price={"42k"} />
      <UserProfile {...userData} />
      <Gadgets gadgets={gadgetData} />
      <Phones products={products} />
      <Article title={title} content={content} />
      <About heading={heading} name={name} learning={learning} />
      <MyGadgets gadgets={gadgetData} />
      <ColorPicker red={red} blue={blue} green={green} />
      <Todo todoItems={todoData} />
    </div>
  );
}

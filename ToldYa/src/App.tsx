// import Button from './button.tsx'
import Argument from "./argument.tsx";
import Footer from "./footer.tsx";
import Header from "./header.tsx";
// import List from './list.tsx'
import "./style.scss";

function App() {
  return (
    <div className="App">
      <Header name="Let's get Started" link="links" age={5} />
      {/* <List />
      <Button /> */}
      <Argument />

      <Footer />
    </div>
  );
}

export default App;

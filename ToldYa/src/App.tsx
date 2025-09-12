import Footer from "./footer.tsx";
import Header from "./header.tsx";
import "./style.scss";

export default function App() {
  return (
    <div className="App">
      <Header name="Let's get Started" link="argument" age={5} />
      <Footer />
    </div>
  );
}

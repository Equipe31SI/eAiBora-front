import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import Social from "./pages/Social";
import Social2 from "./pages/Social2";
import Social3 from "./pages/Social3";
import Social4 from "./pages/Social4";
import Social5 from "./pages/Social5";
import Social6 from "./pages/Social6";
import Loading from "./pages/Loading";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/loading" exact component={Loading} />
          <Route path="/social" exact component={Social} />
          <Route path="/social2" exact component={Social2} />
          <Route path="/social3" exact component={Social3} />
          <Route path="/social4" exact component={Social4} />
          <Route path="/social5" exact component={Social5} />
          <Route path="/social6" exact component={Social6} />
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <div className="login">
            <Container maxWidth="md">
              <Route path="/login" exact component={Login} />
              <Route path="/sign" exact component={Sign} />
            </Container>
          </div>
        </Switch>
        <Footer />
      </Router>
    </div>
    </>
  );
}

export default App;

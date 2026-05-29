import Header from "./components/Header";
import Footer from "./components/Footer";
import Starter from "./components/Starter";
import Skills from "./components/Skills";
import DataAccordion from "./components/DataAccordion";
import { HashRouter as Router } from "react-router-dom";
import GetInTouch from "./components/GetInTouch";

function App() {
    return (
        <Router>
            <div className="app-shell">
                <Header />
                <main className="main-content">
                    <Starter />
                    <div className="content-container">
                        <DataAccordion />
                        <Skills />
                    </div>
                    <GetInTouch />
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

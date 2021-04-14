import "./App.css";
import ambani from "./mukesh-ambani.jpg";

function App() {
    return (
        <div className="App">
            <article>
                <p>This is how much Mukesh Ambani...</p>
                <output>
                    <span className="symbol">₹</span>
                    <span className="number u8"></span>
                    <span className="number u7"></span>
                    <span className="number u6"></span>
                    <span className="symbol u6">,</span>
                    <span className="number u5"></span>
                    <span className="number u4"></span>
                    <span className="number u3"></span>
                    <span className="symbol">,</span>
                    <span className="number u2"></span>
                    <span className="number u1"></span>
                    <span className="number u0"></span>
                </output>
                <p>...since you started reading this page.</p>
                <img id="AmbaniPic" src={ambani} alt="Muskesh Ambani" />
            </article>
            <footer>
                <a href="https://github.com/Saurja">Made By @Saurja Ghosh</a>
            </footer>
        </div>
    );
}

export default App;

import "./App.css";
import ambani from "./mukesh-ambani.jpg";

function App() {
    return (
        <div className="App">
            <article>
                <p>This is how much Mukesh Ambani...</p>
                <output>
                    <span class="symbol">₹</span>
                    <span class="number u8"></span>
                    <span class="number u7"></span>
                    <span class="number u6"></span>
                    <span class="symbol u6">,</span>
                    <span class="number u5"></span>
                    <span class="number u4"></span>
                    <span class="number u3"></span>
                    <span class="symbol">,</span>
                    <span class="number u2"></span>
                    <span class="number u1"></span>
                    <span class="number u0"></span>
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

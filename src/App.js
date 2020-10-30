import logo from './logo.svg';
import './App.css';
/*
import '../CodeMirror/lib/codemirror.css'
import '../CodeMirror/theme/darcula.css'
import '../CodeMirror/lib/codemirror.js'
import '../CodeMirror/mode/clike/clike.js'
import '../CodeMirror/mode/python/python.js'
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn hello
        </a>
        <div>
          hello
        </div>
      </header>
    </div>
  );
}

export default App;

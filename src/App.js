import logo from './logo.svg';
import './App.css';
// const OS = require('os');
// const path = require('path');

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
          Learn React
        </a>
      </header>
    </div>
  );
}
// app.get('/',   async (req, res) => {
//   res.sendFile(path.join(__dirname, '/', 'index.html'));
// });


// app.get('/os',   function(req, res) {
//   res.setHeader('Content-Type', 'application/json');
//   res.send({
//       "os": OS.hostname(),
//       "env": process.env.NODE_ENV
//   });
// })

// app.get('/live',   function(req, res) {
//   res.setHeader('Content-Type', 'application/json');
//   res.send({
//       "status": "live"
//   });
// })

// app.get('/ready',   function(req, res) {
//   res.setHeader('Content-Type', 'application/json');
//   res.send({
//       "status": "ready"
//   });
// })
export default App;

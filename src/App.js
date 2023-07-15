import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState('');

  async function fetchData() {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL);
      const parsedRes = await response.json();
      if (parsedRes.body) {
        setData(parsedRes.body);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h2>React | Express | Vercel</h2>
          <h3>Test Deployment</h3>
          <button onClick={fetchData} className={`App-data-button`}>
            Fetch Data Button
          </button>
          {data !== '' ? (
            <h3 className="App-res">{data}</h3>
          ) : (
            <h3 className="App-no-res">Data not returned from server</h3>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

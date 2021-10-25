import logo from './logo.svg';
import './App.css';

function App() {
  const books = [
    {date: "1/1", item: "お年玉", amount:10000},
    {date: "1/3", item: "ケーキ", amount:500},
    {date: "2/1", item: "お小遣い", amount:3000},
    {date: "2/5", item: "マンガ", amount:600}
  ]

  return (
    <div className="App">
      <header className="App-header">

       
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <h1>お小遣い帳</h1>
          <table className="book">
            <thead>
              <tr><td>日付</td><th>項目</th><th>入金</th><th>出金</th></tr>
            </thead>
            <tbody>
              <tr><td>{books[0].date}</td><td>{books[0].item}</td><td>{books[0].amount}</td><td></td></tr>
              <tr><td>{books[1].date}</td><td>{books[1].item}</td><td></td><td>{books[1].amount}</td></tr>
              <tr><td>{books[2].date}</td><td>{books[2].item}</td><td>{books[2].amount}</td><td></td></tr>
              <tr><td>{books[3].date}</td><td>{books[3].item}</td><td></td><td>{books[3].amount}</td></tr>
            </tbody>
          </table>
        </div>

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

export default App;

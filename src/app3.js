import logo from './logo.svg';
import './App.css';


function App() {
  const books = [
    {date: "1/1", item: "お年玉", amount:10000},
    {date: "1/3", item: "ケーキ", amount:-500},
    {date: "2/1", item: "お小遣い", amount:3000},
    {date: "2/5", item: "マンガ", amount:-600}
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
              <MoneyBookItem book={books[0]} />
              <MoneyBookItem book={books[1]} />
              <MoneyBookItem book={books[2]} />
              <MoneyBookItem book={books[3]} />
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
// constは再代入できない変数
const MoneyBookItem = (props) => {
  const {date, item, amount} = props.book
  if (amount > 0) {
    return (
      <tr>
        <td>{date}</td>
        <td>{item}</td>
        <td>{amount}</td>
        <td></td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td>{date}</td>
        <td>{item}</td>
        <td></td>
        <td>{-amount}</td>
      </tr>
    )
  }
  
}



export default App;

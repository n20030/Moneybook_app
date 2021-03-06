import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

function App() {
  const books = [
    {date: '1/1', item: 'お年玉', amount: 10000},
    {date: '1/3', item: 'ケーキ', amount: -500},
    {date: '2/1', item: 'お小遣い', amount: 3000},
    {date: '2/5', item: 'マンガ', amount: -600}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        <title>小遣い帳</title>
        <table className="book">
          <thead>
            <tr><th>日付</th><th>項目</th><th>入金</th><th>出金</th></tr>
          </thead>
          <tbody>
            {books.map((book) =>
            <MoneyBookItem book={book} key={book.date + book.item} /> )}
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

const MoneyBookItem = (props) => {
  const {date, item, amount} = props.book
  return (
    <tr>
      <td>{date}</td>
      <td>{item}</td>
      <td>{amount >= 0 ? amount : null}</td>
      <td>{amount <= 0 ? -amount : null}</td>
    </tr>
  )
 
}
MoneyBookItem.propTypes = {
  book: PropTypes.object.isRequired
}

const Title = (props) => {
  return (<h1>{props.children}</h1>)
}

Title.protoTypes = {
  children: PropTypes.string
}
export default App;

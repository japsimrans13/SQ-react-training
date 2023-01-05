import logo from './logo.svg';
import './App.css';
import Form from './components/Form.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form></Form>
      </header>
    </div>
  );
}

export default App;

function App() {
  //state
  const [message, setMessage] = React.useState('my message');
  
  //handlers
  function handleClick() {
    setMessage('my new message')
  }
  
  //template
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

ReactDOM.render(
  <div>
    <App />
  </div>,
document.getElementById('root'));
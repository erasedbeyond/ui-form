import Main from './Main'
import Header from './Header'

import '../css/App.scss';

function App() {
  return (
    <div className="app">
      <Header/>
      <Main/>
      <div id='background-design'></div>
    </div>
  );
}

export default App;

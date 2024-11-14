import './App.css';
import { menuItems } from './data/db';

function App() {

  console.log(menuItems);
  
  return (
    <div className="App">
     <header className="bg-teal-400 py-5">
      <h1 className="text-center font-black text-4xl">Tip Calculator</h1>
     </header>
    </div>
  );
}

export default App;

import './App.css';
import MenuItem from './components/MenuItem';
import { menuItems } from './data/db';

function App() {

  console.log(menuItems);

  return (
    <div className="App">
      <header className="bg-teal-400 py-5">
        <h1 className="text-center font-black text-4xl">Tip Calculator</h1>
      </header>
      <main className='max-w-7xl mx-auto py-20 grid md:grid-cols-2'>
        <section className='p-5'>
          <h2 className='text-4xl font-black'>Menu</h2>
          <div className='space-y-3 mt-10'>
            {
              menuItems.map(item => <MenuItem key={item.id} item={item} />)
            }
          </div>
        </section>
        <section>
          <h2>Orders</h2>
        </section>
      </main>
    </div>
  );
}

export default App;

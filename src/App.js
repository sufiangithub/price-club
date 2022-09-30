import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className="text-3xl font-bold underline bg-orange-500 text-white py-2">Hello Tailwind</h1>
      <p className='bg-red-200 py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum non eum ex, commodi magnam quam rerum ut suscipit officia animi modi. Similique nulla velit neque odio eius voluptas quia molestias.</p>
    </div>
  );
}

export default App;

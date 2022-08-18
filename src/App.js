import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Router from './Components/Routes/Routes';

function App() {
  return (
    <main className='App'>
      <Header />
      <Router />
      <Footer />
    </main>
  );
}

export default App;

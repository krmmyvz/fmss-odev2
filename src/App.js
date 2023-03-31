import { useEffect } from 'react';
import './App.css';
import TodoApp from './components/Todo';

function App() {

  const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
  }
  useEffect(() => {
    window.addEventListener('resize', appHeight);
    appHeight(); // bileşen ilk render edildiğinde appHeight() fonksiyonunu çağırın
    return () => {
      window.removeEventListener('resize', appHeight);
    };
  }, []); // useEffect sadece bir kez çağırılsın
 
  return (
    <div className="App"> 
      <TodoApp />
    </div>
  );
}

export default App;

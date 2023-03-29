import { useEffect } from 'react';
import './App.css';
import TodoApp from './components/Todo';

function App() {

  const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    doc.style.setProperty('--container-height', `${window.innerHeight*0.60}px`)
  }
  useEffect(() => {
    window.addEventListener('resize', appHeight);
    appHeight(); // bileşen ilk render edildiğinde appHeight() fonksiyonunu çağırın
    return () => {
      window.removeEventListener('resize', appHeight);
    };
  }, []); // useEffect sadece bir kez çağırılsın
 
  return (
    <div className="App app-height" style={{ height: 'var(--app-height)'}}> 
      <TodoApp />
    </div>
  );
}

export default App;

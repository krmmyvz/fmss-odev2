import { useEffect } from 'react';
import './App.css';
import TodoApp from './components/Todo';

function App() {

  // appHeight() fonksiyonu List içindeki bileşenin yüksekliğini ayarlayacak state'i tanımlar
  const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
  }
  // useEffect fonksiyonu bileşen ilk render edildiğinde appHeight() fonksiyonunu çağırır
  
  useEffect(() => {
    window.addEventListener('resize', appHeight);
    appHeight(); 
    return () => {
      window.removeEventListener('resize', appHeight);
    };
  }, []); //=> useEffect fonksiyonu sadece bir kez çağırır
 
  return (
    <div className="App"> 
      <TodoApp />
    </div>
  );
}

export default App;

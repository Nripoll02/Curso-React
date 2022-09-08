import './App.css';
import './stylesheets/Button.css';
import './stylesheets/Counter.css';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  

  const addClick = () => {
    setCount(count + 1);
  };

  const resetCounter = () => {
    setCount(0);
  };


  return (
    <div className="App">
      <div className='contenedor-principal'>
          <Counter 
            count={count}
          />

          <Button
            text='Click'
            clickButton={true}
            manejarClick={addClick}
          />

          <Button
            text='Reset'
            clickButton={false}
            manejarClick={resetCounter}
          />

      </div>
    </div>
  );
}


export default App;

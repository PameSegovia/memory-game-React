import { useState, useRef } from 'react'
import './App.css';


import Cards from './components/Cards'
import Timer from './components/Timer'
import Ranking from './components/Ranking';
import { supabase } from './helpers/superbaseClient';



function App() {
  const [start, setStart] = useState(false);
  const [save, setSave] = useState(false);
  const [name, setName] = useState('');
  const [warning, setWarning] = useState(false)
  const [error, setError] = useState(false)
  const score = useRef(0);

  const handleSave = async () => {
    if (name !== "") {

      const error = await supabase
        .from('ranking')
        .insert({ name: name, score: score.current })

      error.status === 409 ? setError(true) : location.reload()
      console.log(error);
      setWarning(false)
    } else {
      setWarning(true)
    }
  }




  return (
    <div className="App">
      <h1>Memory Game</h1>
      <div className="menu">
        <Timer start={start} setStart={setStart} setSave={setSave} />
        <div className="buttons">
          {!start && !save
            ? <button className="btn" onClick={() => setStart(true)}>Jugar</button>
            : <button className="btn" onClick={() => location.reload()}>Reiniciar</button>
          }
          {/*save &&
          <>
            <input type="text" 
              onChange={e=>setName(e.target.value)}
              className={`${warning?'warning':''}`}  
            />
            <button onClick={handleSave}>Guardar Datos</button>
          </>
      */}
          { /*error && <p className='error'>Nombre ya Existe</p> */}
        </div>
      </div>
      <Cards score={score} start={start}  />
     
    </div>
  )
}

export default App

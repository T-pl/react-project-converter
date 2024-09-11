import { useEffect, useState } from 'react';
import './App.css'
import AppConverter from './AppConverter'
import logo from './assets/Logo.png'


export default function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');



  useEffect(() => {
    const date = new Date();
    setDay(date.getDate());
    setMonth(date.toLocaleString('default', { month: 'long' }));
    setYear(date.getFullYear());

  }, []);
  return (
    <>
      <header>
        <img src={logo} alt="Logo Oficial" />
        <div className="info">
           <div id='date'>{day} de {month} {year}</div>
          <p>Dados de câmbio disponibilizados pela Momingstar.</p> 
        </div>
      </header>
      <main >
        <AppConverter />
      </main>
    </>
  )
}


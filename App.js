import { useState } from 'react';
import { Buscador } from './components/Buscador';
import { Crear } from './components/Crear';
import { Listado } from './components/Listado';



function App() {

  const [listState, setListState] = useState([]);


  return (
    <div className='layout'>
      {/*Cabecera*/}
      <header className='header'>
        <div className='logo'>
          <div className='play'></div>
        </div>

        <h1>MisPelis</h1>
      </header>

      {/*Barra de navegación*/}
      <nav className='nav'>
        <ul>
          <li><a href='/#'>Inicio</a></li>
          <li><a href='/#'>Peliculas</a></li>
          <li><a href='/#'>Blog</a></li>
          <li><a href='/#'>Contacto</a></li>
        </ul>
      </nav>

      {/*Contenido principal*/}
      <section id='content' className='content'>

        {/*aqui va el listado de peliculas*/}

        <Listado listState={listState} setListState= {setListState}/>

      </section>

      {/*Barra lateral*/}
      <aside className='lateral'>
        <Buscador listState={listState} setListState= {setListState}/>

        <Crear setListState={setListState}/>

      </aside>

      {/*Pie de página*/}
      <footer className='footer'>
        &copy; React Proyect - <a href='https://www.instagram.com/j.sandoval_24/'>Jose Sandoval</a>
      </footer>

    </div>
  );
}

export default App;

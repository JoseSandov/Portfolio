import React, { useState } from 'react'

export const Buscador = ({listState, setListState}) => {

    const[search, setSearch] = useState ('');
    const[notFound, setNotFound] = useState (false);


    const searchMovie = (e) => {
        // crear estado y actualizarlo
        setSearch(e.target.value);
        

        //filtrar para buscar coincidencias
        let found_movies = listState.filter(movie => {
            return movie.title.toLowerCase().includes(search.toLocaleLowerCase());
        });

        if(search.length <= 1 || found_movies <= 0){
            found_movies = JSON.parse(localStorage.getItem('movie'));
            setNotFound(true);
        }else{
            setNotFound(false);
        }


        // actualizar el estado del listado principal con lo que he logrado filtrar
        setListState(found_movies);
    }

    return (
        <div className='search'>
            <h3 className='title'>Buscador: {search}</h3>
            {(notFound == true && search.length > 1) && (
                <span className='not_found'>No se ha encontrado ninguna coincidencia</span>
            )}
            <form>
                <input  type='text' 
                        id='search_field' 
                        name='search'
                        autoComplete='off'
                        value={search}        
                        onChange={searchMovie}
                />
                <button id='search'>Buscar</button>
            </form>
        </div>
    )
}

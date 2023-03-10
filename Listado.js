import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listState, setListState}) => {

    // const [listState, setListState] = useState([]);

    const [edit, setEdit] = useState (0);

    useEffect(() => {

        console.log('componentes del listado de peliculas cargado')
        getMovies();

    }, []);

    const getMovies = () => {
        let movies = JSON.parse(localStorage.getItem('movie'));

        setListState(movies);

        return movies;
    }

    const deleteMovie = (id) => {
        // conseguir peliculas almacenadas
        let stored_movies = getMovies();

        // filtrar esas peliculas para que elimiinen del array la que no quiero
        let mew_array_movies = stored_movies.filter(movie => movie.id !== parseInt(id));

        // actualizar estado del listado
        setListState(mew_array_movies)

        // actualizar datos del local sotrage 
        localStorage.setItem('movie', JSON.stringify(mew_array_movies));
    }



    return (
        <>
        {listState != null ? 
        listState.map(movie => {

                return (
                    <article key={movie.id} className='peli-item'>
                        <h3 className='title'>{movie.title}</h3>
                        <p className='description'>{movie.description}</p>

                        <button className='edit' onClick={ () => {setEdit(movie.id)}}>Editar</button>
                        <button className='delete' onClick={ () => deleteMovie(movie.id)}>Borrar</button>
                    
                        {/*aparece formulario de editar*/}
                        {edit === movie.id && (

                            <Editar movie={movie}
                                    getMovies={getMovies}
                                    setEdit={setEdit}
                                    setListState={setListState}
                            />

                        )}

                    </article>
                );
            })
            : <h2>No movies to show</h2>
        }

        </>
    )
}


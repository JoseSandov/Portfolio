import React from 'react'

export const Editar = ({movie, getMovies, setEdit, setListState}) => {

    const title_component = 'Edit Movie';

    const keepEdit = (e, id) => {
        e.preventDefault();

        //conseguir el target del evento
        let target = e.target;
        
        // buscar el indice del objeto de la pelicula a actualizar
        const stored_movies = getMovies();
        const index = stored_movies.findIndex(movie => movie.id === id);

        // crear objeto con ese id de ese indice, con titulo y descripcion del formulario
        let movie_updated = {
                id,
                title: target.title.value,
                description: target.description.value
        };

        //actualizar el elemento con ese indice
        stored_movies[index] = movie_updated;

        // guardar el nuevo array de objetos en el local sotrage
        localStorage.setItem('movie', JSON.stringify(stored_movies));

        // actualizar estados
        setListState(stored_movies);
        setEdit(0);

    }

  return (
    <div className='edit_form'>
        <h3 className='title'>{title_component}</h3>
        <form onSubmit={e => keepEdit(e, movie.id)}>
            <input  type='text'
                    name='title'
                    className='title_edit'
                    defaultValue={movie.title}/>

            <textarea
                        name='description'
                        defaultValue={movie.description}    
                        className='description_edit'/>    
            
            <input type='submit' className='edit' value='update' />

        </form>
    </div>
  )
}

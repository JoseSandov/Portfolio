import React, { useState } from 'react'
import { Saveinstorage } from '../helpers/Saveinstorage';

export const Crear = ({setListState}) => {

    const titleComponent = 'Add movie';

    const [movieState, setmovieState] = useState({
        title: '',
        description: ''
    });

    const { title, description } = movieState

    const getFormValue = e => {
        e.preventDefault();

        // Get form value
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;

        // Crear objeto de la pelicula aguardar
        let movie = {
            id: new Date().getTime(),
            title,
            description
        };

        // Skeep state
        setmovieState(movie);

        // Actualizar estado
        setListState(elements => {
            return [...elements, movie]
        });

        // Guardar en el almacenamiento local
        Saveinstorage('movie', movie);

    }


    return (
        <div className='add'>
            <h3 className='title'>{titleComponent}</h3>

            <strong>
                {(title && description) && 'you have created the movie: ' + title}
            </strong>

            <form onSubmit={getFormValue}>
                <input type='text'
                    id='title'
                    name='value'
                    placeholder='Title' />

                <textarea id='description'
                    name='description'
                    placeholder='Description'></textarea>

                <input type='submit'
                    id='save'
                    value='Submit' />
            </form>
        </div>
    )
}
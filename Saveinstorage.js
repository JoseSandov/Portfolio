export const Saveinstorage = (key, element) => {

    // Conseguir los elementos que ya tenemos en LocalStorage
    let elements = JSON.parse(localStorage.getItem(key));


    // Comprobar si es un array 
    if (Array.isArray(elements)){
        
        // Anadir dentro del array un elemento nuevo
        elements.push(element);
    }else{

        // Crear un array con la nueva peli
        elements = [element];
    }

    // Guardar en el LocaStorage
    localStorage.setItem(key , JSON.stringify(elements));

    // Devolver objeto guardao
    return element;
     

}
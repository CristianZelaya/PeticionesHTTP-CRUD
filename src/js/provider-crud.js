const urlCRUD = 'https://reqres.in/api/users';

const getUsuario = async ( id ) => {

    const resp = await fetch( `${urlCRUD}/${id}`)
    const { data } = await resp.json();

    return data;
}

const crearUsuario = async ( usuario ) => {

    const resp = await fetch( urlCRUD, {
        method: 'POST', //metodo para insertar
        body: JSON.stringify( usuario ), // transforma el objeto a json
        headers: {
            'Content-Type': 'application/json' // tipo de informacion json
        }
    });

    return await resp.json();

}

const actualizarUsuario = async ( id, usuario ) => {

    const resp = await fetch ( `${urlCRUD}/${id}}`, {
        method: 'PUT',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await resp.json();

}

const borrarUsuario = async ( id ) => {

    const resp = await fetch( `${urlCRUD}/${id}`, {
        method: 'DELETE'
    })

    return ( resp.ok ) ? 'Borrado' : 'No se puede eliminar';
}

export {

    getUsuario,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario

}

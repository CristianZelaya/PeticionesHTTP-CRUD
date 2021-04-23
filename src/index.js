import * as CRUD from './js/provider-crud'


CRUD.getUsuario(1)
    .then( console.log );

CRUD.crearUsuario({
    name: 'Cristian',
    job: 'Programador :v'
}).then( console.log );

CRUD.actualizarUsuario(1, {
    name: 'Juan',
    job: 'Actriz nopor'
}).then( console.log );

CRUD.borrarUsuario( 1 ).then( console.log );


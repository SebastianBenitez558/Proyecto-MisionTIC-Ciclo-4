import { connect } from 'mongoose';
// const { connect } = require('mongoose');

const conectarBD = async () => {
  return await connect(
    'mongodb+srv://admin:AdminProyecto558@proyecto-misiontic-cicl.ru4dz.mongodb.net/Proyecto-Ciclo-4?retryWrites=true&w=majority'
    )
    .then(() => {
      console.log('Conexion exitosa');
    })
    .catch((e) => {
      console.error('Error conectando a la bd', e);
    });
};

export default conectarBD;
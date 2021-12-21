const resolvers = {
    Query: {
      Usuarios: async (parent, args) => {
        const usuarios = [
          {
            nombre: 'Sebastian',
          },
          {
            nombre: 'Juan',
          },
          {
            nombre: 'Pedro',
          },
        ];
  
        return usuarios;
      },
    },
  };
  
  export { resolvers };
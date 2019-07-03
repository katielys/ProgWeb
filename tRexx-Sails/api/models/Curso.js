module.exports = {

    attributes: {
        nome:{
            type:'string',
            required:true,
            maxLength:64

          
        },
        sigla:{
            type:'string',
            required:true,
            maxLength:4


        },

        descricao:{
            type:'string'

        },
        
        user: {
            model: 'User'
          }
    },
}
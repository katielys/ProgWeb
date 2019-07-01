module.exports = {
    attributes: {
        jogador: {
            type: 'number',
            required:true,
          },
          data:{

            type:'string',
            required:true,
            maxLength:45


          },

          pontuacao:{
            type:'number',
            required:true
          },

          user:{
            model:'User',
          },

    },


}
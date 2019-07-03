/**
 * GameController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    trex: async function (req, res){
        res.view('pages/game');
    },

    pontuacao: async function (req,res){
        await Jogada.create({
            pontuacao: req.body.pontuacao,
            jogador: req.me.id
        });
        res.end('Pontuacao salva');
    }
};


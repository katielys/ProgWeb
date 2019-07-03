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
        console.log(req.me.id)
        await Jogada.create({
            pontuacao: req.body.pontuacao,
            jogador: req.me.id,
            data: Date.now()
        });
        res.end('Pontuacao salva');
    },

    ranking: async function (req,res){
        let jogadasOk = await Jogada.find()
        let jogadas = []

        for (let i = 0; i < jogadasOk.length; i++) {
            let ele = jogadasOk[i]
            let user = await User.findOne({ id: ele.jogador })
            let data = new Date(parseInt(ele.data))
            data = `${data.getUTCDate()}/${data.getMonth() + 1}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
             jogadas.push({
                jogador: user.fullName,
                pontuacao: ele.pontuacao,
                data
            })
            
        }
      
        let resp = {
            title: `Ranking`,
            jogadas
        }
        return res.view('pages/ranking', resp)
    }
};


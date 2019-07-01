/**
 * CursoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  index: async function(req,res){
      res.view('pages/curso/index');
  },

    
  create: async function(req,res){},

  read: async function(req,res){
      //var cursoId = req.param('cursoId');
    },

  update: async function(req,res){},

  delete: async function(req,res){},


};


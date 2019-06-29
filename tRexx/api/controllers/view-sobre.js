/**
 * Module dependencies
 */

// ...


/**
 * view-sobre.js
 *
 * Display "Sobre" page.
 */
module.exports = async function viewSobre(req, res) {
   var realesed  = 2014;
  return res.view('pages/sobre', {realesed: realesed});

};

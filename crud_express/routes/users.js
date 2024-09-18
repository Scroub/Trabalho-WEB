var express = require('express');
var router = express.Router();
var CadastroServices = require ("../services/cadastro.services")

// Metodo GET para todos os registros //
router.get('/', (req, res, next)=>{
  res.json(CadastroServices.list())
}
)

// Metodo POST para adicionar um cadastro //
router.post('/', (req, res, next)=> {
  const cadastro = CadastroServices.register(req.body)
  res.json(cadastro)
}
)

// Metodo DELETE para retirar o registro pelo ID //
router.delete('/:id', (req, res, next)=>{
  const ok = CadastroServices.delete(req.params.id)
  if(ok) return res.json({ "sucess": true})
  else return res.json ({"sucess": false})
}
)

module.exports = router;

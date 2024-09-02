var express = require('express');
var router = express.Router();
var pokemonServices = require ("../services/pokemon.services");

// Metodo GET para todos os pokemons //
router.get('/', (req, res, next)=>{
        res.json(pokemonServices.list())
    }
)

// Metodo GET para pegar o pokemon pelo ID //
router.get('/:id', (req, res, next)=>{
        const out = pokemonServices.retrieve(req.params.id)
        return res.json(out)
    }
)

// Metodo POST para adicionar um pokemon //
router.post('/', (req, res, next)=> {
        const pokemon = pokemonServices.register(req.body)
        res.json(pokemon)
    }
)

// Metodo PUT para atualizar o pokemon pelo ID //
router.put('/:id', (req, res, next)=>{
        const pokemon = pokemonServices.update(req.params.id, req.body)
            res.json(pokemon)
    }
)

// Metodo DELETE para retirar o pokemon pelo ID //
router.delete('/:id', (req, res, next)=>{
        const ok = pokemonServices.delete(req.params.id)
        if(ok) return res.json({ "sucess": true})
        else return res.json ({"sucess": false})
    }
)

module.exports = router;

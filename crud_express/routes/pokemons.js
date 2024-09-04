var express = require('express');
var router = express.Router();
var pokemonServices = require ("../services/pokemon.services");
var pokemonServiceMongo = require("../services/pokemon.services.mongo")

/* Aqui os metodos foi somente de teste utilizando apenas o Express

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
)*/

router.get('/', (req, res, next)=>{
    pokemonServiceMongo.list(req, res)
}
)

router.post('/', (req, res, next)=> {
    pokemonServiceMongo.register(req, res)
}
)

router.get('/:id', (req, res, next)=>{
    pokemonServiceMongo.retrieve(req, res)
}
)

router.put('/:id', (req, res, next)=>{
    pokemonServiceMongo.update(req, res)
}
)

router.delete('/:id', (req, res, next)=>{
    pokemonServiceMongo.delete(req, res)
}
)

module.exports = router;

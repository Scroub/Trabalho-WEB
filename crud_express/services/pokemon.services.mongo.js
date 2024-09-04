const PokemonModel = require("../models/pokemon.models.mongo")

class PokemonService {
    static list(req, res){
        PokemonModel.find().then((pokemons)=>{ res.status(201).json(pokemons) })
    }

    static retrieve(req, res){
        PokemonModel.findById(req.params.id).then((pokemons)=> { res.status(201).json(pokemons) })
    }

    static register(req, res){
        PokemonModel.create(req.body).then((pokemons)=>{ res.status(201).json(pokemons) })
    }

    static update(req, res){
        PokemonModel.findByIdAndUpdate(req.params.id, req.body, {new:true}).then((pokemons)=> { res.status(201).json(pokemons) })
    }

    static delete(req, res){
        PokemonModel.findByIdAndDelete(req.params.id).then((pokemons) => { res.status(201).json(pokemons) })
    }
}

module.exports = PokemonService

var mongoose = require("mongoose")

var pokemonSchema = mongoose.Schema(
    {
        sprite: {type:"number", required:true},
        nome: {type:String, required:true},
        tipo: {type:String, required:true},
        tipo2: {type:String, required:true}
    }
)

var PokemonModel = mongoose.model("pokemons", pokemonSchema)

module.exports = PokemonModel
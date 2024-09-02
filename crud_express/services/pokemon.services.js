const PokemonModel = require ("../models/pokemon.models")

let pokemons = [
    {id:0, sprite:"1", nome:"pikachu", tipo:"Steel", tipo2:"Fire"},
    {id:1 ,sprite:"5", nome:"pihu", tipo:"Steel", tipo2:"Fire"},
    {id:2, sprite:"10", nome:"Bulbasaurogera", tipo:"Grass", tipo2:"Ice"}
]

let id = 3

class PokemonServices {
    static list() {
        return pokemons 
    }

    static retrieve (id) {
        for (let i=0; i<pokemons.length; i++){
            if(pokemons[i].id == id) {
                return pokemons[i]
            }
        }
        return {}
    }

    static register(data) {
        let pokemon = new PokemonModel(
            id ++,
            data.sprite,
            data.nome,
            data.tipo,
            data.tipo2
        )
        pokemons.push(pokemon)
        return pokemon
    }

    static update(id, data) {
        for(let pokemon of pokemons) {
            if(pokemon.id == id){
                pokemon.sprite = data.sprite
                pokemon.nome = data.nome
                pokemon.tipo = data.tipo
                pokemon.tipo2 = data.tipo2
                return pokemon
            }
        }
        return null
    }

    static delete (id) {
        for(let i=0; i<pokemons.length; i++){
            if (pokemons[i].id == id) {
                pokemons.splice(i, 1);
                return true;
            }
        }
        return false
    }

}

module.exports = PokemonServices
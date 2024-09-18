const CadastroModel = require ("../models/cadastro.models")

let Cadastros = [{id:0, nome:"teste", date: "2001-04-13", valor:0}]

let id = 1

class CadastroServices {

    static list() {
        return Cadastros
    }

    static register(data) {
        let Cadastro = new CadastroModel(
            id ++,
            data.nome,
            data.date,
            data.valor
        )
        Cadastros.push(Cadastro)
        return Cadastro
    }

    static delete (id) {
        for(let i=0; i<Cadastros.length; i++){
            if (Cadastros[i].id == id) {
                Cadastros.splice(i, 1);
                return true;
            }
        }
        return false
    }

}

module.exports = CadastroServices
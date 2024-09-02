import { TextField, Typography, Box, InputLabel, Select, MenuItem, FormControl, Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Editar = () => {

    let { id } = useParams()

    const [nome, setNome] = useState ("")
    const [tipagem, setTipagem ] = useState ("Steel")
    const [tipagem2, setTipagem2] = useState ("Steel")
    const [numeroImagem, setNumeroImagem] = useState ("0")
    const pokemons = [
        {sprite:"1", nome:"pikachu", id:0, tipo:"Steel", tipo2:"Fire"},
        {sprite:"5", nome:"pihu", id:1, tipo:"Steel", tipo2:"Fire"}
    ]

    function getPokemonById(id){
        for(let i=0;i<pokemons.length;i++)
            if(id == pokemons[i].id) return pokemons[i]
        return null
    }

    useEffect(
        () => {
            let pokemon = getPokemonById(id)
            setNome(pokemon.nome)
            setTipagem(pokemon.tipo)
            setTipagem2(pokemon.tipo2)
            setNumeroImagem(pokemon.sprite)
        },
        []
    )

    


    function handleSubmit(event){
        event.preventDefault()
        alert("Pokemon Cadastrado")
        
    }

    return (
        <>
            <Typography variant="h5">
                Editar Pokemon
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField 
                    margin="normal"
                    required
                    fullWidth
                    id="nome"
                    name="nomePokemon"
                    label="Nome Pokemon"
                    value={nome}
                    autoFocus
                    onChange={(event) => setNome(event.target.value)}
                />

                <FormControl sx={{width:110 ,mt:2, mr:4}}>
                    <InputLabel id="Type1-label">Tipo 1</InputLabel>
                    <Select
                        labelId="Type1-label"
                        label="Type1"
                        value = {tipagem}
                        onChange={(event) => setTipagem(event.target.value)}
                    >
                        <MenuItem value='Steel'>Steel</MenuItem>
                        <MenuItem value='Water'>Water</MenuItem>
                        <MenuItem value='Dragon'>Dragon</MenuItem>
                        <MenuItem value='Eletric'>Eletric</MenuItem>
                        <MenuItem value='Fairy'>Fairy</MenuItem>
                        <MenuItem value='Ghost'>Ghost</MenuItem>
                        <MenuItem value='Fire'>Fire</MenuItem>
                        <MenuItem value='Ice'>Ice</MenuItem>
                        <MenuItem value='Bug'>Bug</MenuItem>
                        <MenuItem value='Fighting'>Fighting</MenuItem>
                        <MenuItem value='Normal'>Normal</MenuItem>
                        <MenuItem value='Rock'>Rock</MenuItem>
                        <MenuItem value='Grass'>Grass</MenuItem>
                        <MenuItem value='Psychic'>Psychic</MenuItem>
                        <MenuItem value='Dark'>Dark</MenuItem>
                        <MenuItem value='Ground'>Ground</MenuItem>
                        <MenuItem value='Poison'>Poison</MenuItem>
                        <MenuItem value='Flying'>Flying</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{width:110, mt:2}}>
                    <InputLabel id="Type2-label">Tipo 2</InputLabel>
                    <Select
                        labelId="Type2-label"
                        label="Type2"
                        value = {tipagem2}
                        onChange={(event) => setTipagem2(event.target.value)}
                    >
                        <MenuItem value='Steel'>Steel</MenuItem>
                        <MenuItem value='Water'>Water</MenuItem>
                        <MenuItem value='Dragon'>Dragon</MenuItem>
                        <MenuItem value='Eletric'>Eletric</MenuItem>
                        <MenuItem value='Fairy'>Fairy</MenuItem>
                        <MenuItem value='Ghost'>Ghost</MenuItem>
                        <MenuItem value='Fire'>Fire</MenuItem>
                        <MenuItem value='Ice'>Ice</MenuItem>
                        <MenuItem value='Bug'>Bug</MenuItem>
                        <MenuItem value='Fighting'>Fighting</MenuItem>
                        <MenuItem value='Normal'>Normal</MenuItem>
                        <MenuItem value='Rock'>Rock</MenuItem>
                        <MenuItem value='Grass'>Grass</MenuItem>
                        <MenuItem value='Psychic'>Psychic</MenuItem>
                        <MenuItem value='Dark'>Dark</MenuItem>
                        <MenuItem value='Ground'>Ground</MenuItem>
                        <MenuItem value='Poison'>Poison</MenuItem>
                        <MenuItem value='Flying'>Flying</MenuItem>
                    </Select>
                </FormControl>
                
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="numberImg"
                    name="numberImg"
                    label="Numero da Imagem"
                    type="number"
                    value={numeroImagem}
                    onChange={
                        (event) => { 
                            var spriteNumber = event.target.value;
                            spriteNumber = event.target.value < 0 ? 0 : event.target.value;
                            setNumeroImagem(spriteNumber);
                        }
                    }
                />

                <br />

                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroImagem}.png `} style={{width:"100px"}}/>

                <Button
                    type="submit"
                    variant="contained"
                    sx={{my:2}}
                >
                    Atualizar
                </Button>
            </Box>

           
        </>
    )
}

export default Editar
import { TextField, Typography, Box, InputLabel, Select, MenuItem, FormControl, Button } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Cadastrar = () => {

    const [nome, setNome] = useState ("")
    const [tipo, setTipo ] = useState ("Steel")
    const [tipo2, setTipo2] = useState ("Steel")
    const [sprite, setSprite] = useState ("0")
    const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault()
        const newPokemon = {sprite, nome, tipo, tipo2}
        axios.post("http://localhost:3001/pokemons", newPokemon).then((response)=> { alert("Pokemon Cadastrado"); navigate("/listarPokemon") })
        .catch(error=>console.log(error))
    }

    return (
        <>
            <Typography variant="h5">
                Cadastrar Pokemon
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
                    autoFocus
                    onChange={(event) => setNome(event.target.value)}
                />

                
            
                <FormControl sx={{width:110 ,mt:2, mr:4}}>
                    <InputLabel id="Type1-label">Tipo 1</InputLabel>
                    <Select
                        labelId="Type1-label"
                        label="Type1"
                        value = {tipo}
                        onChange={(event) => setTipo(event.target.value)}
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

                <FormControl sx={{width:110 ,mt:2}}>
                    <InputLabel id="Type2-label">Tipo 2</InputLabel>
                    <Select
                        labelId="Type2-label"
                        label="Type2"
                        value = {tipo2}
                        onChange={(event) => setTipo2(event.target.value)}
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
                    onChange={
                        (event) => { 
                            var spriteNumber = event.target.value;
                            spriteNumber = event.target.value < 0 ? 0 : event.target.value;
                            setSprite(spriteNumber);
                        }
                    }
                />

                <br />

                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${sprite}.png `} style={{width:"100px"}}/>

                <Button
                    type="submit"
                    variant="contained"
                    sx={{my:2}}
                >
                    Cadastrar
                </Button>
            </Box>

           
        </>
    )
}

export default Cadastrar
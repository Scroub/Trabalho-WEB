import { TextField, Typography, Box, InputLabel, Select, MenuItem, FormControl, Button } from "@mui/material"


const Cadastrar = () => {
    return (
        <>
            <Typography variant="h5">
                Cadastrar Pokemon
            </Typography>

            <Box>
                <TextField 
                    margin="normal"
                    required
                    fullWidth
                    id="nome"
                    name="nomePokemon"
                    label="Nome Pokemon"
                    autoFocus
                />

                <TextField 
                    margin="normal"
                    required
                    fullWidth
                    id="numero"
                    name="numeroPokemon"
                    label="Numero do Pokemon"
                />

                <FormControl sx={{width:110 ,mt:2, mr:4}}>
                    <InputLabel id="Type1-label">Tipo 1</InputLabel>
                    <Select
                        labelId="Type1-label"
                        label="Type1"
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
                <br/>
                
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
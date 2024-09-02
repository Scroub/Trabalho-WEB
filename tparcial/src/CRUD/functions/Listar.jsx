import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import { Delete, Edit } from "@mui/icons-material"
import { Link } from "react-router-dom"

const Listar = () => {

    /*const [pokemons, setPokemons] = useState ([])*/

    const pokemons = [
        {sprite:"1", nome:"pikachu", id:0, tipo:"Steel", tipo2:"Fire"},
        {sprite:"5", nome:"pihu", id:1, tipo:"Steel", tipo2:"Fire"}
    ]

    function deletePokemonById (id){
        if(window.confirm("Deseja excluir?")){
            alert("Pokemon excluido com sucesso!")
        }

    }

   return(  
    <>
        <Typography variant="h5">
            Listar Pokemons
        </Typography>

        <TableContainer sx={{mt:4, mb:4}}>
            <Table sx={{minWidth:650}} aria-label="simple table">
                <TableHead sx={{backgroundColor:"#c94139"}}>
                    <TableRow>
                        <TableCell sx={{color:"white"}}>ID</TableCell>
                        <TableCell sx={{color:"white"}}>Sprite</TableCell>
                        <TableCell sx={{color:"white"}}>Nome</TableCell>
                        <TableCell sx={{color:"white"}}>Tipagem</TableCell>
                        <TableCell sx={{color:"white"}}>Tipagem2</TableCell>
                        <TableCell sx={{color:"white"}}>Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        pokemons.map(
                            (pokemon)=>{
                                return(
                                    <TableRow key={pokemon.id}>
                                        <TableCell>{pokemon.id}</TableCell>
                                        <TableCell><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.sprite}.png `} style={{width:"80px"}}/></TableCell>
                                        <TableCell>{pokemon.nome}</TableCell>
                                        <TableCell>{pokemon.tipo}</TableCell>
                                        <TableCell>{pokemon.tipo2}</TableCell>
                                        <TableCell>
                                            <Box>
                                                <IconButton aria-label="edit" color="primary" component={Link} to={`/editarPokemon/${pokemon.id}`}>
                                                    <Edit />
                                                </IconButton>
                                                <IconButton aria-label="delete" color="error" onClick={()=>deletePokemonById(pokemon.id)}>
                                                    <Delete />
                                                </IconButton>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </>
   )
}

export default Listar
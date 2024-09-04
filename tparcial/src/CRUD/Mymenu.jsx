import { AppBar, Box, Button, Menu, MenuItem ,Container, Toolbar, Typography } from "@mui/material"
import CatchingPokemonTwoToneIcon from '@mui/icons-material/CatchingPokemonTwoTone';
import { useState } from "react";
import { Link } from "react-router-dom";


const Mymenu = () => {

    // Aqui Criei uma variavel de estado para realizar uma ancoragem ao botão Listar
    const [anchorElListar, setAnchorElListar] = useState(null)

    // Abri uma função para disparar um evento ao clickar no botão de Remove
    const handleOpenListar = (event) => {
        setAnchorElListar(event.currentTarget)
    }

    // Está Função é para setar o valor de state para "null" fazendo com que ao clickar fora do botão remove, o menu acabe desaparecendo
    const handleCloseListar = () => {
        setAnchorElListar(null)
    }

    function dropListarMenu() {
        return (
            <Box>
                <Button sx={{color:"white", my:2}}
                        onClick={handleOpenListar}
                >
                    Listar
                </Button>
                
                <Menu
                    anchorEl={anchorElListar}
                    open={Boolean(anchorElListar)}
                    onClose={handleCloseListar}
                >
                    <MenuItem
                        onClick={handleCloseListar}
                        component={Link}
                        to={"listarPokemon"}
                    >
                        Listar todos
                    </MenuItem>
                    <MenuItem
                        onClick={handleCloseListar}
                        component={Link}
                        to={`listarPokemon/${1}`}
                    >
                        Listar ID
                    </MenuItem>
                </Menu>
            </Box>
        )
    }

    return (
        <AppBar postion="static" sx={{backgroundColor:"#c94139"}}>
            <Container>
                <Toolbar>
                    <CatchingPokemonTwoToneIcon sx={{display:"flex", mr:1}}/>
                    <Typography 
                        variant="h5"
                        component="a"
                        href="/"
                        sx={{textDecoration:"none", color:"white", fontWeight:"800"}}>
                        Pokemon
                    </Typography>

                    <Box sx={{
                        ml:3,
                        display:"flex",
                        width:"100%",
                        justifyContent:"flex-end"
                    }}>
                         
                        <Button component={Link} to="cadastrarPokemon" sx={{color:"white", my:2}}>
                            Cadastrar
                        </Button>

                        {dropListarMenu()}        
                                
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Mymenu
import { AppBar, Box, Button, Menu, MenuItem ,Container, Toolbar, Typography } from "@mui/material"
import CatchingPokemonTwoToneIcon from '@mui/icons-material/CatchingPokemonTwoTone';
import { useState } from "react";
import { Link } from "react-router-dom";


const Mymenu = () => {

    // Aqui Criei uma variavel de estado para realizar uma ancoraragem ao botão Remove e apresentar o menu Dropdown
    const [anchorElRemove, setAnchorElRemove] = useState(null)

    // Abri uma função para disparar um evento ao clickar no botão de Remove
    const handleOpenRemove = (event) => {
        setAnchorElRemove(event.currentTarget)
    }

    // Está Função é para setar o valor de state para "null" fazendo com que ao clickar fora do botão remove, o menu acabe desaparecendo
    const handleCloseRemove = () => {
        setAnchorElRemove(null)
    }

    function dropRemoverMenu() {
        return (
            <Box>
                <Button sx={{color:"white", my:2}}
                        onClick={handleOpenRemove}
                >
                    Cadastrar
                </Button>
                
                <Menu
                    anchorEl={anchorElRemove}
                    open={Boolean(anchorElRemove)}
                    onClose={handleCloseRemove}
                >
                    <MenuItem
                        onClick={handleCloseRemove}
                        component={Link}
                        to={"cadastrarPokemon"}
                    >
                        Cadastrar
                    </MenuItem>
                    <MenuItem
                        onClick={handleCloseRemove}
                        component={Link}
                        to={"editarPokemon"}
                    >
                        Editar
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
                        {dropRemoverMenu()} 

                        <Button component={Link} to="listarPokemon" sx={{color:"white", my:2}}>
                            Listar
                        </Button>

                        <Button sx={{color:"white", my:2}}>
                            Remover
                        </Button>                   
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Mymenu
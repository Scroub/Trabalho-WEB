import { AppBar, Box, Button, Container, Toolbar, Typography, Menu, MenuItem } from "@mui/material"
import AdbIcon from "@mui/icons-material/Adb"
import { useState } from "react"
import { Link } from "react-router-dom"

const MymenuV1 = () => {

    const [anchorElProfessor, setAnchorElProfessor] = useState(null)
    const [anchorElAluno, setAnchorElAluno] = useState(null)
    
    const handleOpenAnchorElProfessor = (event) => {
        setAnchorElProfessor(event.currentTarget)
    }

    const handleCloseAnchorElProfessor = () => {
        setAnchorElProfessor(null)
    }

    const handleOpenAnchorElAluno = (event) => {
        setAnchorElAluno(event.currentTarget)
    }

    const handleCloseAnchorElAluno = () => {
        setAnchorElAluno(null)
    }


    function dropProfMenu(){
        return(
            <Box>
                <Button
                    sx={{
                        color:"white",
                        my: 2
                    }}
                    onClick={handleOpenAnchorElProfessor}

                >
                    Professores
                </Button>
                <Menu
                    anchorEl={anchorElProfessor}
                    open={Boolean(anchorElProfessor)}
                    onClose={handleCloseAnchorElProfessor}
                >
                    <MenuItem
                        onClick={handleCloseAnchorElProfessor}
                        component={Link}
                        to={"cadastrarProfessor"}
                    >
                        <Typography>Cadastrar</Typography>
                        
                    </MenuItem>

                    <MenuItem
                        onClick={handleCloseAnchorElProfessor}
                        component={Link}
                        to={"listarProfessor"}
                    >
                        <Typography>Listar</Typography>
                        
                    </MenuItem>

                </Menu>

            </Box>
        )
    }

    function dropAlunoMenu () {
        return (
            <Box>
                <Button
                    sx={{
                        color:"white",
                        my: 2
                    }}
                    onClick={handleOpenAnchorElAluno}

                >
                    Alunos
                </Button>
                <Menu
                    anchorEl={anchorElAluno}
                    open={Boolean(anchorElAluno)}
                    onClose={handleCloseAnchorElAluno}
                >
                    <MenuItem
                        onClick={
                            () => {
                                handleCloseAnchorElAluno()
                                alert("Indo para Matricula")
                            }
                        }
                    >
                        Matricula
                    </MenuItem>

                    <MenuItem>
                        Notas
                    </MenuItem>
                </Menu>

            </Box>
        )
    }

    return (
        <AppBar postion="static">
            <Container>
                <Toolbar>
                    <AdbIcon sx={{
                        display:{xs:"none", md:"flex"},
                        mr: 1
                    }}/>
                    <Typography 
                        variant="h5"
                        component="a"
                        href="/home"
                        sx={{
                            textDecoration:"none",
                            color:"white",
                            fontFamily: "monospace",
                            letterSpacing: ".3rem",
                            fontWeight: 800
                        }}
                    >
                        CRUD_V1
                    </Typography>
    
                    <Box sx={{
                        ml: 3,
                        display:"flex",
                        width:"100%",
                        justifyContent:"flex-end"
                    }}>
                        {dropProfMenu()}
                        {dropAlunoMenu()}
                        
                        <Button sx={{
                                color:"white",
                                my: 2
                            }}   
                        >
                            Sobre
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default MymenuV1
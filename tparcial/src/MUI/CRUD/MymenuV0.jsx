import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material"
import AdbIcon from "@mui/icons-material/Adb"

const Mymenu = () => {
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
                        CRUD_V0
                    </Typography>
                        
                    <Box sx={{
                        ml: 3,
                        display:"flex",
                        width:"100%",
                        justifyContent:"flex-end"
                    }}>
                        <Button
                            sx={{
                                color:"white",
                                my: 2
                            }}
                        >
                            Professores
                        </Button>
                        
                        <Button sx={{
                                color:"white",
                                my: 2
                            }}
                        >
                            Alunos
                        </Button>

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

export default Mymenu
import { Container, Box, Typography, TextField, Button, Link } from "@mui/material"

const Signin = () => {
    return (
        <Container maxWidth="xs">
            <Box 
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    marginTop:8
                }}
            >
                <Typography
                    component="h1"
                    variant="h5"
                >
                    Sign In
                </Typography>
                <TextField 
                    required
                    margin="normal"
                    fullWidth
                    autoFocus
                    
                    label="E-mail"
                    id="email"
                    name="email"
                    type="email"
                />

                <TextField 
                    required
                    margin="normal"
                    fullWidth
                    autoFocus
                    
                    label="Senha"
                    id="password"
                    name="password"
                    type="password"
                />

                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        /*mt: 2, mb: 2  margin-top e margin-bottom (obs: my, modifica ambas)*/ 
                        my: 2
                    }}
                >
                    Sign in
                </Button>

                <Box
                    sx={{
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"space-between",
                        width:"100%"
                }}
                >
                    <Link
                        underline="none"
                        href="#"
                    >
                        Esqueceu a senha?
                    </Link>

                    <Link
                        underline="none"
                        href="#"
                    >
                        Cadastre-se!
                    </Link>
                </Box>
            </Box>
        </Container>
    )
}

export default Signin
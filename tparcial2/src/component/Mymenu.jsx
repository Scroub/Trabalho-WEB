import { Box, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { Delete } from "@mui/icons-material"
import MenuBookIcon from '@mui/icons-material/MenuBook';
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import 'dayjs/locale/pt-br'

const Mymenu = () => {

    const [Date, setDate] = useState(dayjs())
    const [nome, setNome] = useState("")
    const [valor, setValor] = useState("")
    const [id, setId] = useState("")
    /*const [cadastros, setCadastros] = useState ([{id:id, nome:nome, valor:valor}])*/

   const [cadastros, setCadastros] = useState ([{id:0, nome:"Iury", Date:Date.d ,valor:"10"}])

    function Calendar () {
        return(
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
                <DatePicker
                label="Data"
                value={Date}
                onChange={(newDate) => setDate(newDate)}
            />
            </LocalizationProvider>
        )
        
    }
    
    function handlesubmit (event) {
        event.preventDefault()
        console.log(nome)
        console.log(Date)
        console.log(valor)
        
    }

    return(
        <>
            <Box
                component="form"
                margin={5}
                onSubmit={handlesubmit}
            >
                <Typography variant="h4" mt={4}> 
                <MenuBookIcon sx={{mr:1}}/>
                    Gerenciador de Gastos 
                </Typography>

                <TextField 
                    margin="normal"
                    required
                    fullWidth
                    id="nome"
                    name="nome"
                    label="Cadastro"
                    autoFocus
                    onChange={(event) => setNome(event.target.value)}
                />
                    
                {Calendar()}

                <TextField 
                    margin="normal"
                    required
                    fullWidth
                    id="valor"
                    name="valor"
                    label="Valor"
                    onChange={(event) => setValor(event.target.value)}
                />
    
                <Button
                    type="submit"
                    variant="contained"
                    sx={{my:2}}
                >
                    Adicionar Gasto
                </Button>
            </Box>

            <Typography variant="h6" ml={20} fontFamily={"Bold"}>
                Total de Gasto: R$ {valor}
            </Typography>

        <TableContainer sx={{mt:4, mb:4}}>
            <Table sx={{minWidth:650}} aria-label="simple table">
                <TableHead>
                    <TableRow >
                        <TableCell>Nome</TableCell>
                        <TableCell>Data</TableCell>
                        <TableCell>Valor</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        cadastros.map(
                            (cadastros)=>{
                                return(
                                    <TableRow key={cadastros.id}>
                                        <TableCell>{cadastros.nome}</TableCell>
                                        <TableCell>{cadastros.Date}</TableCell>
                                        <TableCell>{cadastros.valor}</TableCell>
                                        <TableCell>
                                            <Box>
                                                <IconButton aria-label="delete" color="error">
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

export default Mymenu
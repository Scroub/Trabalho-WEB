import { Box, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { Delete } from "@mui/icons-material"
import MenuBookIcon from '@mui/icons-material/MenuBook';
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useEffect, useState } from "react";
import 'dayjs/locale/pt-br'
import axios from "axios";

const Mymenu = () => {

    const [date, setdate] = useState(dayjs())
    const [nome, setNome] = useState("")
    const [valor, setValor] = useState("")
    const [id, setId] = useState("")
    const [cadastros, setCadastros] = useState ([])

    function Calendar () {
        return(
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
                <DatePicker
                label="Data"
                value={date}
                onChange={(newdate) => setdate(newdate)}
            />
            </LocalizationProvider>
        )
    }

    function SomaValores (){
        return cadastros.reduce((soma ,cadastro) => soma + parseFloat(cadastro.valor), 0)
    }

    function handlesubmit (event) {
        const formattedDate = date.format("DD-MM-YYYY");
        const newCadastro = { id, nome, date: formattedDate, valor }
        axios.post("http://localhost:3001/cadastros", newCadastro).then((response)=> { alert("Item Cadastrado")})
        .catch(error=>console.log(error))
    }

    useEffect(
        ()=> {
            axios.get("http://localhost:3001/cadastros").then((response)=>{ setCadastros(response.data) })
            .catch(error => console.log(error))
        }, []
    )

    function deleteRegistrosById (id){
        if(window.confirm("Deseja excluir?")){
            alert("Registro excluido com sucesso!")
            axios.delete(`http://localhost:3001/cadastros/${id}`).then((response)=>{ 
                const novaLista = cadastros.filter(cadastros => cadastros.id != id)
                setCadastros(novaLista)
             })
            .catch(error=>console.log(error))
        }
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
                Total de Gasto: R$ {SomaValores().toFixed(2)}
            </Typography>

        <TableContainer sx={{mt:4, mb:4}}>
            <Table sx={{minWidth:650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
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
                                        <TableCell>{cadastros.date}</TableCell>
                                        <TableCell>{cadastros.valor}</TableCell>
                                        <TableCell>
                                            <Box>
                                                <IconButton aria-label="delete" color="error" onClick={()=>deleteRegistrosById(cadastros.id)}>
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
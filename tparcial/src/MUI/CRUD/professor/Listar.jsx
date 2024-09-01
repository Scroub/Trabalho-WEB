import { Typography, TableContainer, Paper, Table, TableHead, TableBody, TableRow, TableCell, Box } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import DeleteIcon  from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { styled } from "@mui/material/styles"
import { tableCellClasses } from "@mui/material/TableCell"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const Listar = () => {

    /*const professores= [
        {id:0, nome:"Iury de Oliveira", curso:"SI", titulacao:"GRAD"},
        {id:1, nome:"Aluisio", curso:"RC", titulacao:"GRAD"},
        {id:2, nome:"Peaga", curso:"ES", titulacao:"GRAD"},
        {id:3, nome:"Douglas Holanda", curso:"DD", titulacao:"MEST"},
        {id:4, nome:"Jefferson Carvalho", curso:"EC", titulacao:"DOUT"}
    ]*/

    const [professores, setProfessores] = useState ([])
    const [mudanca, setMudanca] = useState(false)

    useEffect (
        () => {
            axios.get("http://localhost:3001/professor/listar")
            .then(
                (response) => {
                    setProfessores(response.data)
                }
            )
            .catch(error => console.log(error))
        },
        []
    )

    function deleteTeste (id) {
        for(let i = 0; i < professores.length; i++){
            if(professores[i].id == id) {
                professores.splice(i, 1)
                return true
            }
        }
        return false
    }

    function deleteProfessorById(id) {
        if(window.confirm("Deseja Excluir?")){
            alert("Professor " + id + " excluido com sucesso!")
            axios.delete(`http://localhost:3001/professor/delete/${id}`)
            .then(
                (response) => {
                    // Cria um novo vetor filtrando de acordo com o paramentro passado
                    //const resultado = professores.filter(professor => professor.id != id)
                    //setProfessores(resultado)
                    deleteTeste(id)
                    setMudanca(!mudanca)
                }
            )
            .catch(error => console.log(error))
        }
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Listar Professor
            </Typography>
            <TableContainer component={Paper} sx={{my: 4}}>
                <Table sx={{minWidth: 650}} arial-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>TITULAÇÃO</StyledTableCell>
                            <StyledTableCell>AÇÕES</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            professores.map(
                                (professor) => {
                                    return (
                                        <StyledTableRow key={professor.id}>
                                            <StyledTableCell>{professor.id}</StyledTableCell>
                                            <StyledTableCell>{professor.nome}</StyledTableCell>
                                            <StyledTableCell>{professor.curso}</StyledTableCell>
                                            <StyledTableCell>{professor.titulacao}</StyledTableCell>
                                            <StyledTableCell>
                                                <Box>
                                                    <IconButton aria-label="edit" color="primary" component={Link} to={`/editarProfessor/${professor.id}`}>
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton aria-label="delete" color="error" onClick={() => deleteProfessorById(professor.id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Box>
                                            </StyledTableCell>
                                        </StyledTableRow>
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border:0,
    },
}));

export default Listar
import { Typography, TextField, Box, FormControl, FormLabel, FormGroup, FormControlLabel, InputLabel, Select, MenuItem, Button, Checkbox } from "@mui/material"
import { useEffect } from "react"
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

const Editar = () => {

    let { id } = useParams()
    const navigate = useNavigate()

    // Quebra galho, simulando uma base de dados
    /*const professores= [
        {id:0, nome:"Iury de Oliveira", curso:"SI", titulacao:"GRAD" , ai:{es:true, al:false, ds:false, mc:false}},
        {id:1, nome:"Aluisio", curso:"RC", titulacao:"GRAD", ai:{es:false, al:false, ds:true, mc:false}},
        {id:2, nome:"Peaga", curso:"ES", titulacao:"GRAD", ai:{es:false, al:true, ds:false, mc:false}},
        {id:3, nome:"Douglas Holanda", curso:"DD", titulacao:"MEST", ai:{es:false, al:true, ds:false, mc:false}},
        {id:4, nome:"Jefferson Carvalho", curso:"EC", titulacao:"DOUT", ai:{es:true, al:false, ds:true, mc:false}}
    ]

    function getProfessorById(id){
        for(let i=0;i<professores.length;i++)
            if(id == professores[i].id) return professores[i]
        return null
    }*/

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [titulacao, setTitulacao] = useState("GRAD")
    const [ai, setAi] = useState({es:false, al:false, ds:false, mc:false})

    let {es, al, ds, mc} = ai

    // como [] está vazio, o useEffect funciona como um construtor!
    useEffect(
        () => {
            /*let professor = getProfessorById(id)
            setNome(professor.nome)
            setCurso(professor.curso)
            setTitulacao(professor.titulacao)
            setAi(professor.ai)*/

            axios.get(`http://localhost:3001/professor/retrieve/${id}`)
            .then(
                (response) => {
                    setNome(response.data.nome)
                    setCurso(response.data.curso)
                    setTitulacao(response.data.titulacao)
                    setAi(response.data.ai)
                }
            )
            .catch(error => console.log(error))
        },
        []
    )

    function handleSubmit(event) {
        event.preventDefault()
        // alert("Seu Cadastro foi Editado!")
        const professorAtualizado = {nome, curso, titulacao, ai}
        axios.put(`http://localhost:3001/professor/update/${id}`, professorAtualizado)
        .then(
            (response) => {
                alert(`Professor ID ${response.data.id} atualizado`)
                navigate("/listarProfessor")
            }
        )
        .catch(error => console.log(error))
    }

    function handleCheckbox(event) {
        setAi({
            ...ai,
            [event.target.name]:event.target.checked
        })

    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Editar Professor
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField
                    margin="normal"
                    required
                    autoFocus
                    fullWidth
                    id="nome"
                    name="nome"
                    label="Nome Completo"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                />
    
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="curso"
                    name="curso"
                    label="Curso"
                    value={curso}
                    onChange={(event) => setCurso(event.target.value)}
                />

                <FormControl fullWidth sx={{mt:2}}>
                    <InputLabel id="select-tit-label">Titulação</InputLabel>
                    <Select
                        labelId="select-tit-label"
                        label="Titulação"
                        value={titulacao}
                        onChange={(event) => setTitulacao(event.target.value)}
                    >
                        <MenuItem value="GRAD">Graduação</MenuItem>
                        <MenuItem value="MEST">Mestrado</MenuItem>
                        <MenuItem value="DOUT">Doutorado</MenuItem>
                    </Select>
                </FormControl>

                <FormControl
                    component="fieldset"
                    variant="standard"
                    sx={{my:2}}
                >
                    <FormLabel 
                        component="legend"
                        sx={{fontSize:12, mb: 2}}

                    >
                        Areas de Interesse
                    </FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={es} name="es" onChange={handleCheckbox}/>} label="Engenharia de Software"/>
                        <FormControlLabel control={<Checkbox checked={al} name="al" onChange={handleCheckbox}/>} label="Algoritmos"/>
                        <FormControlLabel control={<Checkbox checked={ds} name="ds" onChange={handleCheckbox}/>} label="Desenvolvimento de Software"/>
                        <FormControlLabel control={<Checkbox checked={mc} name="mc" onChange={handleCheckbox}/> } label="Matematica Computacional"/>
                    </FormGroup>
                </FormControl>

                <Box sx={{display:"flex", justifyContent:"start"}}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{my:3}}
                    >
                        Editar
                    </Button>
                </Box>
               
            </Box>
        </>
    )
}

export default Editar
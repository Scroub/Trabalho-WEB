import { BrowserRouter, Route, Routes } from "react-router-dom"
import MymenuV1 from "./MymenuV1"
import { Container } from "@mui/material"
// Paginas do Professor //
import CadastrarProfessor from "./professor/Cadastrar"
import ListarProfessor from "./professor/Listar"
import EditarProfessor from "./professor/Editar"

const MainPage = () => {
    return (
        <BrowserRouter>
            <MymenuV1 />
            <Container sx={{mt:12}}>
                <Routes>
                    <Route path="cadastrarProfessor" element={<CadastrarProfessor />}/>
                    <Route path="listarProfessor" element={<ListarProfessor />}/>
                    <Route path="editarProfessor/:id" element={<EditarProfessor />}/>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default MainPage
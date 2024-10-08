import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Mymenu from './Mymenu'
import { Container } from '@mui/material'

// Funcionalidades da Aplicação

import Cadastrar from './functions/Cadastrar'
import Listar from './functions/Listar'
import Editar from './functions/Editar'

const Mainpage = () => {
    return (
        <BrowserRouter>
            <Mymenu />
            <Container sx={{mt:12}}>
                    <Routes>
                        <Route path="cadastrarPokemon" element={<Cadastrar />}/>
                        <Route path="listarPokemon" element={<Listar />}/>
                        <Route path="editarPokemon/:id" element={<Editar />}/>
                    </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default Mainpage
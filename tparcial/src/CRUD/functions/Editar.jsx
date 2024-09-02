import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import { useState } from 'react';

const Editar = () => {
    const [selected, setSelected] = useState ("")
    return (
        <>
        <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
                setSelected(!selected);
            }}
        >
        <CheckIcon />
        </ToggleButton>
        </>
    )
}

export default Editar
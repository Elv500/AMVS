import Container from '@mui/material/Container'

import Typography from '@mui/material/Typography';

function Sidebar () {
    return (
        <Container>
            <Typography variant="h4" color="text.primary">
                Hola, este es el Sidebar.
            </Typography>
            <Typography variant="body1" color="text.secondary">
                Este es un texto secundario en el Sidebar.
            </Typography>
            <h1 variant="h4" color='text.primary' >Hola mundo</h1>
        </Container>
    )
}

export default Sidebar;
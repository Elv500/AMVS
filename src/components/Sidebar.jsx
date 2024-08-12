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
        </Container>
    )
}

export default Sidebar;
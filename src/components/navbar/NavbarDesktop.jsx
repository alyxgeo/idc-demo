
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';




const Navbardesktop = () => {
    return (

        <Box >


            <AppBar position="fixed">


                <Toolbar sx={{
                    bgcolor: '#E5E5E5',
                    //border: '2px solid red',
                    height: '100px'

                }}>

                    <Box sx={{ flexGrow: 1 }}>
                        <img
                            src='/images/navbar/alteryxlogo.png'
                            alt='logo'
                            width='196px'
                            height='60px'
                        />
                    </Box>

                    <Box>
                        <img src='/images/navbar/idclogo.png'
                            alt='logo'
                            width='209px'
                            height='40' />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>

    )
}

export default Navbardesktop
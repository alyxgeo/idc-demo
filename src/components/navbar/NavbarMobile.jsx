import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';





const Navbarmobile = () => {
    
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar  position="fixed">
        <Toolbar sx={{bgcolor:'#E5E5E5'}}>

            <Box sx={{flexGrow: 1}}>
                <img 
                src='/images/navbar/alteryxlogo.png' 
                alt='logo' 
                width='80px'
                height='30px'
                />
            </Box>

            <Box>
                <img src='/images/navbar/idclogo.png' 
                alt='logo' 
                width='120px'
                height='30'/>
            </Box>
        </Toolbar>
    </AppBar>
</Box>
  )
}

export default Navbarmobile
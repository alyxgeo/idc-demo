import styled from "@emotion/styled"
import { Box, Typography} from "@mui/material"




export const FooterContainer = styled(Box)(({ theme }) => ({
    height: '92px',
    backgroundColor: '#000000',
    display: 'flex',
    alignItems:'center',
    justifyContent: 'space-evenly',
    fontSize:'18px',
    color:'#FFFFFF',
    [theme.breakpoints.down('md')]: {
       flexDirection:'column',
       fontSize:'12px',
    },
    //
    //border: "2px solid red",
}))


export const FooterText = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
       flexDirection:'column',
       fontSize:'12px',
       
    },
    //
    //border: "2px solid red",
}))

import styled from "@emotion/styled"
import { Box, Typography } from "@mui/material"





export const HomeContainer = styled(Box)(({ theme }) => ({
    marginTop: '60px',
    display: 'flex',
    //height: '533px',
    justifyContent:"center",
    //
    //border: "2px solid black",
    
    [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}))





export const HomeItems = styled(Box)(({ theme }) => ({
    //marginLeft: '375px',
    //height:'533px',
    width: '685px',
    marginRight:'45px',
    //
    //border: "2px solid red",
    [theme.breakpoints.down('md')]: {
        width:'100%',
        margin:'0px',
    }
}))







export const HomeItemText = styled(Typography)(({ theme }) => ({
    fontSize: '18px',

    [theme.breakpoints.down('md')]: {
        fontSize: '15px',
      
    }
}))














//home page cart component style






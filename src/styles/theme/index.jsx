import { createTheme } from "@mui/material"


const theme = createTheme({
   
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true
                //disableElevation: true
            }
        }
    },
    typography: {
        fontFamily: [
            'Montserrat', 
            'sans-serif'
        ].join(','),
    },

});

export default theme;
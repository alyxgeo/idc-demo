import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";




//banner-style

//banner background image
export const BannerBackground = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${"images/banner/banner-bg.png"})`,
    height: '580px',
    [theme.breakpoints.down('sm')]: {
        height: '250px',
    }

}))


//banner container
export const BannerContainer = styled(Box)(({ theme }) => ({
    position: "absolute",
    left: '400px',
    top: '190px',
    [theme.breakpoints.down('sm')]: {
        position: "static",
    }

}))



//banner title 
export const BannerTitle = styled(Typography)(({ theme }) => ({
    color: '#FFFFFF',
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
        paddingTop: '1rem',
        paddingLeft: '2rem'
    }

}))




//banner description
export const BannerDescription = styled(Typography)(({ theme }) => ({
    color: '#FFFFFF',
    paddingTop: '1rem',
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.7rem',
        paddingTop: '0.25rem',
        paddingLeft: '2rem',
    }

}))


//banner button
export const BannerButton = styled(Button)(({ theme }) => ({
    marginTop: '2rem',
    [theme.breakpoints.down('sm')]: {
        marginLeft: '2rem'
    }
}))








//banner-bottom-style

//banner bottom container

export const BannerBottomContainer = styled(Box)(({ theme }) => ({
    background: '#F8F8F8',
    display: 'flex',
    justifyContent: "center",
    padding: '15px 16px 15px 16px',

    [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }

}
))



//banner bottom itmes
export const BannerItem = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    width:'300px',

}
))



//banner bottom item image
export const BannerItemImage = styled('img')(({ src }) => ({
    src: `url(${src})`,

}
))




//banner bottom item text
export const BannerItemText = styled(Typography)(() => ({
    fontSize: '12px',
    lineHeight: '21px',

}
))




//banner end



//banner end container
export const BannerEnd = styled(Box)(() => ({

}
))

//banner end description
export const BannerEndDescription = styled(Typography)(() => ({

}
))

//banner end card
export const BannerEndCard = styled(Typography)(() => ({

}
))
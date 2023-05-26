
import { useNavigate } from 'react-router-dom'
import {
    BannerDescription, BannerBackground, BannerButton, BannerContainer,
    BannerTitle, BannerBottomContainer, BannerItem, BannerItemImage, BannerItemText,
} from '../../styles/banner/index.jsx'


//import { useMediaQuery } from '@mui/material';
//import { useTheme } from '@emotion/react';




const Banner = () => {



    //const theme = useTheme();
    //const matches = useMediaQuery(theme.breakpoints.down("md"));


const navigate = useNavigate()


    return (
        <>
            <BannerBackground >

                <BannerContainer >

                    <BannerTitle variant='h3'
                    >Analytics Process</BannerTitle>
                    <BannerTitle variant='h3'
                    >Automation Survey</BannerTitle>

                    <BannerDescription >
                        There are many variations of passages of Lorem Ipsum available,
                    </BannerDescription>
                    <BannerDescription >
                        but the majority have suffered alteratio
                    </BannerDescription>

                    
                    <BannerButton variant="contained"
                    onClick={()=> navigate('/login')}

                    >Take the Assesment</BannerButton>
                </BannerContainer>

            </BannerBackground>



            <BannerBottomContainer>

                <BannerItem>
                    <BannerItemImage src='/images/banner/banner-logo-one.png' />
                    <BannerItemText variant='subtitle1'>
                        Contrary to popular belief, Lorem Ipsum  s not simply random text.
                    </BannerItemText>

                </BannerItem>


                <BannerItem>
                    <BannerItemImage src='/images/banner/banner-logo-two.png' />
                    <BannerItemText variant='subtitle1'>
                        Contrary to popular belief, Lorem Ipsum  s not simply random text.
                    </BannerItemText>
                </BannerItem>


                <BannerItem>
                    <BannerItemImage src='/images/banner/banner-logo-three.png' />
                    <BannerItemText variant='subtitle1'>
                        Contrary to popular belief, Lorem Ipsum  s not simply random text.
                    </BannerItemText>

                </BannerItem>

            </BannerBottomContainer>

        </>
    )
}

export default Banner
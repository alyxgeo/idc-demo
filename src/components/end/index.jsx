import { Box, Typography } from "@mui/material"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';



const End = () => {


    return (
        <>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                columnGap: '17px',
                flexDirection: { xs: 'column', lg: 'row' },
                alignItems: 'center',
                //border: '1px solid red',
                marginBottom:{xs:'25px', md:'100px'},
                marginTop: { xs: '85px', md: '155px' },

            }}>




                <Box
                    component='img'
                    sx={{
                        //marginTop: { xs: '15px', md: '155px' },

                        //border: '1px solid red',
                        height: { xs: '50%', md: '652px' },
                        width: { xs: '50%', md: '652px' },

                    }}
                    src="../../../public/images/final/finalimg.png"
                    alt="final_img"
                />





                <Box sx={{

                    height: { xs: '95%', md: '604px' },
                    width: { xs: '95%', md: '570px' },
                    //marginTop: { xs: '15px', md: '111px' },
                    textAlign: 'center',
                    //border: '2px solid red',
                }} >

                    <Typography variant="h4" sx={{
                        fontWeight: '500',
                        fontSize: '35px',
                        lineHeight: '35px',
                    }}>Thank for your </Typography>

                    <Typography variant="h4" sx={{
                        color: '#0093D0',
                        fontWeight: '700',
                        fontSize: '48px',
                        lineHeight: '48px',
                    }}>

                        participation</Typography>

                    <Typography sx={{
                        fontWeight: '400',
                        fontSize: '15px',
                        lineHeight: '25px',
                        paddingTop: '24px'
                    }}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature
                    </Typography>





                    <Card elevation={3} sx={{

                        height: { xs: '95%', md: '413px' },
                        width: { xs: '95%', md: '570px' },

                        textAlign: 'center',
                        marginTop: '35px',
                    }}>



                        <CardContent>

                            <img src="../../../public/images/final/finalicon.png"
                                alt='final-icon' width='117px' height='117px' />

                            <Typography variant='h4' sx={{
                                fontWeight: '500',
                                fontSize: '25px',
                                lineHeight: '38px',
                                paddingTop: '20px',
                                color: '#9A9A9A'
                            }}>Stage 3</Typography>


                            <Typography variant='h4' sx={{
                                fontWeight: '600',
                                fontSize: '42px',
                                lineHeight: '64px',
                            }}> Expert</Typography>

                            <Typography sx={{
                                fontWeight: '500',
                                fontSize: '22px',
                                color: '#757575'
                            }}> Download your detailed report here</Typography>

                        </CardContent>

                        <Box>
                            <CardActions sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                                <Button sx={{ height: '65px', width: '270px', }}
                                    variant='contained' type="submit" >Download</Button>
                            </CardActions>

                        </Box>


                    </Card>
                </Box>

            </Box >
        </>

    )
}

export default End
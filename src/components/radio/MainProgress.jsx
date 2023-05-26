import { Box, Typography } from "@mui/material"
import ProgressBar from "./ProgressBar"




const MainProgress = ({ count, totalQuestions }) => {


    return (

        <Box sx={{

            height: { xs: '100%', md: '60px' },
            background: '#F9F9F9',

            marginTop: { xs: '60px', md: '100px' },
            //border: '2px solid green',
            boxShadow: '0px 1px 0px rgba(0, 0, 0, 0.13)',
        }}>


            <Box sx={{
                display: 'flex',

                justifyContent: { md: 'space-between' },
                flexDirection: { xs: 'column', md: 'row' },

                //border: '2px solid red',
            }}>


                <Box sx={{
                    paddingTop: '19px',
                    paddingLeft: '51px'
                }}>
                    <Typography sx={{
                        lineHeight: '25px',
                        color: '#000000',
                        fontSize: '16px',
                        fontWeight: '600'
                    }}>

                        {count === 0 ? "Let's get started" : "Continue"}

                    </Typography>
                </Box>





                <Box >

                    <Box sx={{
                        display: 'flex',
                        alignItems:{xs:"center"},
                       
                    }}>


                        <Box sx={{
                            //paddingTop:'20px' ,
                            //paddingRight:'12px',
                            paddingRight: { md: '12px' },
                            paddingTop: { md: '20px' },


                        }}>
                            <Typography>{count + 1}/{totalQuestions}</Typography>
                        </Box>


                        <Box sx={{
                            //paddingTop: '27px',
                            //paddingRight: '185px',
                            paddingRight: { md: '185px' },
                            paddingTop: { md: '27px' },

                        }}>


                            <ProgressBar
                                count={count + 1}
                                totalQuestions={totalQuestions} />


                        </Box>


                    </Box>

                </Box>






            </Box>



        </Box>

    )
}

export default MainProgress
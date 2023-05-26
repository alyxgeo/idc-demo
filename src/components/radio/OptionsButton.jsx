
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import { Grid, Typography } from '@mui/material';

import { v4 as uuidv4 } from 'uuid'







const OptionsButton = (props) => {


    //console.log(props.sampleData)

    const receivedQuestion = props.sampleData.question
    //console.log(receivedQuestion)


    const receivedOptions = props.sampleData.options
    //console.log(receivedOptions[0])





    const optionChange = () => {                          //parent to child data passing
        props.onSelection(true);

    }





    return (

        <>




            {/* radio button question */}


            <Typography>questions {props.count}/{props.totalQuestions}</Typography>
            <Typography>{receivedQuestion}</Typography>





            {/* radio button options */}


            <Box sx={{
                textAlign: 'center',
                marginTop: '40px',
               
                width: { xs: '100%', md: '1065px' },
                //height: { xs: '100%', md: '224px' },
                //border: '2px solid orange'
            }}>


                <RadioGroup defaultValue="" >

                    <Grid container spacing={2}>


                        {receivedOptions.map((value) => (


                            <Grid item xs={12} md={6} key={uuidv4()}>

                                <Sheet


                                    sx={{

                                        width: { xs: '100%', md: '518px' },
                                        height: { xs: '100%', md: '88px' },
                                        //border: '2px solid black'

                                    }}>


                                    <Radio

                                        sx={{
                                            padding: '20px'
                                        }}

                                        onChange={optionChange}


                                        label={value}
                                        overlay
                                        disableIcon
                                        value={value}
                                        slotProps={{

                                            label: ({ checked }) => ({
                                                sx: {
                                                    //fontWeight: 'lg',
                                                    //fontSize: 'md',
                                                    color: checked ? 'white' : 'black',
                                                },
                                            }),
                                            action: ({ checked }) => ({

                                                sx: () => ({

                                                    '&:hover': {
                                                        border: '2px solid #0093D0',
                                                        bgcolor: 'white',
                                                    },

                                                    ...(checked && {
                                                        //'--variant-borderWidth': '2px',

                                                        '&&': {
                                                            // && to increase the specificity to win the base :hover styles
                                                            //borderColor: theme.vars.palette.primary[500],
                                                            bgcolor: '#0093D0',

                                                        },
                                                    }),
                                                }),
                                            }),
                                        }}

                                    />


                                </Sheet>
                            </Grid>

                        ))}

                    </Grid>
                </RadioGroup>
            </Box>

        </>

    )
}

export default OptionsButton
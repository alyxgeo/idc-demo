import Box from '@mui/joy/Box';
import { Button, } from '@mui/material';
import OptionsButton from './OptionsButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainProgress from './MainProgress';





const MainButton = ({ sampleData }) => {

    //console.log(sampleData)




    const navigate = useNavigate();





    //counter

    const [count, setCount] = useState(0)




    //button disable based on option selection

    const [options, setOptions] = useState(false)
    //console.log(options)

    const selectedOption = (optonData) => {
        //console.log(optonData)              
        setOptions(optonData)

    }






    const nextPageChanger = () => {
        setCount(count + 1);
        setOptions(false);
    }




    return (

        <>

        <MainProgress count={count} 
         totalQuestions={sampleData.length} />



            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
            
                //border: '2px solid blue',
                marginTop: { xs: '50px', md: '100px' },
                marginBottom:{ xs: '50px', md: '200px' },
               

            }}>


                <Box sx={{
                    
                    width: { xs: '98%', md: '1167px' },
                    //height: { xs: '98%', md: '457px' },
                    //border: '2px solid red'
                }}>




                    {/*<h1>{count}</h1>*/}




                    {/* radio button question & options */}

                    {sampleData.map((item, index) => (
                        count === index && <OptionsButton
                            key={index}
                            onSelection={selectedOption}
                            sampleData={sampleData[count]}
                            count={count + 1}
                            totalQuestions={sampleData.length} />
                    ))}

                    {/* radio button question & options end */}





                    {/* next button */}

                    {count < sampleData.length - 1 &&

                        <Button

                            disabled={!options}

                            variant='contained'

                            sx={{
                                
                                marginTop: { xs: '20px', md: '40px' },
                                width: '129px',
                                height: '54px',
                                padding: '20px',
                                bgcolor: '#000000'
                            }}

                            onClick={nextPageChanger}

                        >next</Button>

                    }





                    {count === sampleData.length - 1 &&

                        <Button variant='contained' sx={{
                            marginTop: { xs: '20px', md: '40px' },
                            width: '129px',
                            height: '54px',
                            padding: '20px',
                            bgcolor: '#000000'
                        }}

                            disabled={!options}

                            onClick={() => navigate('/end')}

                        >submit</Button>

                    }



                </Box>

            </Box>


        </>

    )
}

export default MainButton;
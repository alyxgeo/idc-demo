
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';




export default function HomeCard() {


    const navigate = useNavigate();

    return (


        <Card sx={{
          
            width: '400px',
            textAlign: 'center',
            marginBottom:'60px',
            //
            //border: '2px solid black',
        }}>



            <CardContent sx={{
                height: '300px',
                //
                //border: '2px solid blue',
            }}>

                <Typography variant='h4'>
                    Are You Ready for</Typography>

                <Typography variant='h4' color="#0093D0" gutterBottom>
                    Automation?</Typography>

                <img src='/images/card/card-logo.png' alt='card-logo' />


                <Typography>
                    Take just 2 minutes to complete this assessment and receive your custmized rport and position
                </Typography>

            </CardContent>


            <Box sx={{
                bgcolor: '#0093D0',
                height: '150px',
                //
                //border: '2px solid orange',
            }}>

                <Typography variant='h5' color='#FFFFFF'>Start Now!</Typography>
                <Typography variant='subtitle1'>Terms and Conditions apply</Typography>
              

                <CardActions sx={{
                    display:'flex',
                    justifyContent:'center',
                }}>
                    <Button variant='contained' size='large'
                    sx={{
                        bgcolor:'#FFFFFF',
                        color:'#0093D0',
                        marginTop:'14px',   
                    }} 
                    
                    onClick={()=> navigate('login')}
                    
                    >
                    
                    Take the Assesment</Button>
                </CardActions>
            </Box>

        </Card>
    );
}

import { DevTool } from "@hookform/devtools";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material"
import { useForm } from "react-hook-form"
import MenuItem from '@mui/material/MenuItem';


import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";



const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];


const schema = yup.object({
    firstname: yup.string().required('first name is required'),
    lastname: yup.string().required('last name is required'),
    email: yup.string().email("Please enter valid email").required("Please enter email"),
    organization: yup.string().required('organization is required'),
    jobtitle: yup.string().required('select job title'),
    jobfunction: yup.string().required('select  job function'),
    country: yup.string().required('select  country'),
    numberofemployes: yup.string().required('select  number of employes'),
    industry: yup.string().required('select  industry'),
    companytype: yup.string().required('select  company type'),

})





const InputForm = () => {


    const form = useForm({
        resolver: yupResolver(schema)
    });


    const { register, handleSubmit, formState, control } = form;

    const { errors } = formState;





    //output data
    const onSubmit = () => {
        //console.log(data)
        navigate('/survey')
    }



const navigate = useNavigate()

    return (


        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: { xs: '50px', sm: '190px' },
            marginBottom: { xs: '50px', sm: '100px' },
            //border:'2px solid red'

        }}>




            <Paper elevation={10} sx={{
                textAlign: 'center',
                width: { xs: '95%', sm: '730px' },
                height: { xs: '100%', sm: '750px' },
            }}>



                <Box sx={{ paddingTop: '60px', }}>

                    <Typography variant='h4' sx={{
                        fontSize: '32px',
                        fontWeight: '600'
                    }} >Register Now</Typography>


                    <Typography variant='subtitle1' sx={{
                        paddingTop: '13px',
                    }} >Contrary to popular belief, Lorem Ipsum is not simply random text</Typography>

                </Box>



                <form noValidate onSubmit={handleSubmit(onSubmit)} >

                    <Grid container paddingTop={'15px'} >


                        <Grid item xs={12} sm={6} paddingTop={'20px'} >
                            <TextField label='first name' type="text" sx={{ width: '300px' }}
                                {...register("firstname")}
                                error={!!errors.firstname}
                                helperText={errors.firstname?.message} />
                        </Grid>




                        <Grid item xs={12} sm={6} paddingTop={'20px'}>
                            <TextField label='last name' type="text" sx={{ width: '300px' }}
                                {...register("lastname")}
                                error={!!errors.lastname}
                                helperText={errors.lastname?.message} />
                        </Grid>



                        <Grid item xs={12} sm={6} paddingTop={'20px'} >
                            <TextField label='Business Email' type="text" sx={{ width: '300px' }}
                                {...register("email")}
                                error={!!errors.email}
                                helperText={errors.email?.message} />
                        </Grid>



                        <Grid item xs={12} sm={6} paddingTop={'20px'} >
                            <TextField label='Organization' type="text" sx={{ width: '300px' }}
                                {...register("organization")}
                                error={!!errors.organization}
                                helperText={errors.organization?.message} />
                        </Grid>




                        <Grid item xs={12} sm={6} paddingTop={'20px'}   >

                            <TextField sx={{ width: '300px' }}
                                label='Job title'
                                select
                                defaultValue=''

                                inputProps={{ ...register('jobtitle') }}
                                error={!!errors.jobtitle}
                                helperText={errors.jobtitle?.message}

                            >

                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}



                            </TextField>

                        </Grid>




                        <Grid item xs={12} sm={6} paddingTop={'20px'}  >

                            <TextField sx={{ width: '300px' }}
                                label='Job Function'
                                select
                                defaultValue=''

                                inputProps={{ ...register('jobfunction') }}
                                error={!!errors.jobfunction}
                                helperText={errors.jobfunction?.message}
                            >

                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}

                            </TextField>

                        </Grid>




                        <Grid item xs={12} sm={6} paddingTop={'20px'}  >

                            <TextField sx={{ width: '300px' }}
                                label='Country'
                                select
                                defaultValue=''

                                inputProps={{ ...register('country') }}
                                error={!!errors.country}
                                helperText={errors.country?.message} >

                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}

                            </TextField>

                        </Grid>




                        <Grid item xs={12} sm={6} paddingTop={'20px'}  >

                            <TextField sx={{ width: '300px' }}
                                label='Number of Employees'
                                select
                                defaultValue=''

                                inputProps={{ ...register('numberofemployes') }}
                                error={!!errors.numberofemployes}
                                helperText={errors.numberofemployes?.message}>

                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}

                            </TextField>

                        </Grid>




                        <Grid item xs={12} sm={6} paddingTop={'20px'}  >

                            <TextField sx={{ width: '300px' }}
                                label='Industry'
                                select
                                defaultValue=''

                                inputProps={{ ...register('industry') }}
                                error={!!errors.industry}
                                helperText={errors.industry?.message}>

                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}

                            </TextField>

                        </Grid>



                        <Grid item xs={12} sm={6} paddingTop={'20px'}  >

                            <TextField sx={{ width: '300px' }}
                                label='Company Type'
                                select
                                defaultValue=''

                                inputProps={{ ...register('companytype') }}
                                error={!!errors.companytype}
                                helperText={errors.companytype?.message}>

                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}

                            </TextField>


                        </Grid>



                    </Grid>




                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginRight: '82px',
                        marginTop: '20px',
                        marginBottom: { xs: '30px' },
                    }}>

                        <Button sx={{ height: '60px', width: '207px', }}
                            variant='contained'  type="submit" 
                            
                        
                            >
                            
                            
                            register</Button>

                    </Box>



                </form>

                <DevTool control={control} />

            </Paper>

        </Box>

    )
}

export default InputForm
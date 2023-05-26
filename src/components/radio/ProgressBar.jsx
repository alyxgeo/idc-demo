

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';




const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  width:'270px',
  //border: '2px solid green',

  
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));





export default function ProgressBar({count , totalQuestions}) {

  
const parts = 100/totalQuestions;
const value = count*parts;
//console.log(value)



  return (

    <Box>
      <BorderLinearProgress variant="determinate" value={value} />

    </Box>
  );
}

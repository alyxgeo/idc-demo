


import { FooterContainer, FooterText } from '../../styles/footer/index'
import { Link, Stack } from '@mui/material'

const Footer = () => {


  return (

    <FooterContainer>


    
      <FooterText>
        Copyright © 2021 IDC and Alteryx. All rights reserved.
      </FooterText>


      <Stack spacing={2} direction='row'>
        <Link underline='hover' >Policy Security</Link>
        <Link underline='hover' >Policy Security</Link>
      </Stack>

    </FooterContainer>
  )
}

export default Footer
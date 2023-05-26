import { useMediaQuery, useTheme } from '@mui/material'

import Navbarmobile from './NavbarMobile';
import Navbardesktop from './NavbarDesktop';




const NavBar = () => {

 const theme = useTheme();
 const matches = useMediaQuery(theme.breakpoints.down('sm'))


  return (
    <div>
    {matches ? <Navbarmobile/> : <Navbardesktop/>}
    </div>
  )
}

export default NavBar
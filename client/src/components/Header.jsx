//using Material-UI to make the header
import { AppBar, Toolbar ,styled } from '@mui/material';
import {Menu} from '@mui/icons-material';
//styling header with styled component (used to control/handling css of the components)
const  StyledHeader = styled(AppBar)`
   background:white;
   height:70px;
`;

const MenuIcon = styled(Menu)`
  color:black;
`;

const Image = styled('img')({
    height:55,
    margin:'auto',
    paddingRight:70
})
const Header=()=>{
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

    return(
    //As text in infoHeader was getting hidden behind the Header ,it having by default position: fixed, we change it to static
       <StyledHeader position="static">    
           <Toolbar>
              <MenuIcon/>
              <Image src={url} alt="logo"/>
           </Toolbar>
       </StyledHeader>
    )
}

export default Header;